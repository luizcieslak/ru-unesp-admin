import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Title }     from '@angular/platform-browser';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})

export class SaldoComponent implements OnInit {

  //A FormGroup is a collection of FormControls, which is inputed in html.
  private saldoForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private formError: string;

  constructor(private titleService: Title, private formBuilder: FormBuilder, 
    private _user: UserService) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Adicionar saldo');

    //Create FormBuilder with your inputs and their Validators.
    this.saldoForm = this.formBuilder.group({
      ra: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  register(): void {
    this.submitAttempt = true;
    if (this.saldoForm.valid) {
      this._user.addSaldo(this.saldoForm.value.ra, this.saldoForm.value.amount)
        .then(_ => alert('Valor adicionado com sucesso.'))
        .catch(reason => alert(reason));
    }
  }

}
