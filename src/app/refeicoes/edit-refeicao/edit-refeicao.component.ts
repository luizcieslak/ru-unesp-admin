import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

//To config NgbDatepicker
import { NgbDatepickerConfig, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';


import { Subscription } from 'rxjs';
import { FirebaseListObservable } from 'angularfire2/database';


//providers
import { RefeicaoService } from '../../providers/refeicao.service';

@Component({
  selector: 'app-edit-refeicao',
  templateUrl: './edit-refeicao.component.html',
  styleUrls: ['./edit-refeicao.component.css']
})
export class EditRefeicaoComponent implements OnInit {

  //A FormGroup is a collection of FormControls, which is inputed in html.
  private editForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private formError: string;

  date: { year: number, month: number, day: number };
  sub: Subscription;
  refeicao: FirebaseListObservable<any>;
  refeicaoKey: string;

  constructor(private titleService: Title, private route: ActivatedRoute,
    private _refeicao: RefeicaoService, private router: Router,
    private formBuilder: FormBuilder) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Novo usuário');

    //Create FormBuilder with your inputs and their Validators.
    this.editForm = this.formBuilder.group({
      base1: ['', Validators.required],
      base2: ['', Validators.required],
      principal: ['', Validators.required],
      veg: ['', Validators.required],
      guarnicao: ['', Validators.required],
      salada1: ['', Validators.required],
      salada2: ['', Validators.required],
      sobremesa: ['', Validators.required],
      suco: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length !== 0) { //checking if object is empty
        this.date = {
          year: +params['year'],
          month: +params['month'],
          day: +params['day']
        }
        this.getRefeicao(this.date);
      } else {
        this.date = undefined;
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRefeicao(date: any) {
    //retrieve info from db
    this.refeicao = this._refeicao.refFromDatepicker(date);
    this.refeicao.take(1).subscribe(refeicao => {
      if (refeicao.length > 0) {
        //getting the refeicao key to use later in register()
        this.refeicaoKey = refeicao[0].$key;
        //update form values
        this.editForm.setValue({
          base1: refeicao[0].base1,
          base2: refeicao[0].base2,
          principal: refeicao[0].principal,
          veg: refeicao[0].veg,
          guarnicao: refeicao[0].guarnicao,
          salada1: refeicao[0].salada1,
          salada2: refeicao[0].salada2,
          sobremesa: refeicao[0].sobremesa,
          suco: refeicao[0].suco
        });
      }
    });
  }

  gotoDate(date: any) {
    this.router.navigate(['refeicoes/edit', this.date.year, this.date.month, this.date.day]);
  }

  register() {
    this.submitAttempt = true;
    if (this.editForm.valid) {
      //send to database
      this._refeicao.edit(this.refeicaoKey, this.editForm.value)
        .then(_ => alert('Refeição alterada no banco de dados'))
        .catch(reason => console.log('error in editRefeicao#register', reason))
    } else {
      this.formError = 'Todos os campos são obrigatórios.'
    }
  }

  newRefeicao(){
    this.router.navigate(['/refeicoes/new']);
  }

}
