import { Component, Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

//To config NgbDatepicker
import { NgbDatepickerConfig, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

//Providers
import { RefeicaoService } from '../../providers/refeicao.service';

//Moment lib
import * as moment from 'moment';
moment.locale('pt-br');

@Component({
  selector: 'app-new-refeicao',
  templateUrl: './new-refeicao.component.html',
  styleUrls: ['./new-refeicao.component.css']
})
export class NewRefeicaoComponent {
  //A FormGroup is a collection of FormControls, which is inputed in html.
  private addForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private formError: string;

  date: any;

  constructor(private formBuilder: FormBuilder, private _refeicao: RefeicaoService) {
    //Create FormBuilder with your inputs and their Validators.
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      timestamp: ['', Validators.nullValidator],
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

  register(): void {
    this.submitAttempt = true;
    if (this.addForm.valid) {
      //remove 'date' value in form
      this.addForm.patchValue({
        date: null
      });
      //send to database
      this._refeicao.add(this.addForm.value)
        .then(_ => alert('Refeição adicionada no banco de dados'))
        .catch(reason => console.log('error in register', reason))
    } else {
      this.formError = 'Todos os campos são obrigatórios.'
    }
  }

  datePicker(): void {
    if (this.date) {
      //transform this.date to Moment
      const dateMoment = moment(`${this.date.year}-${this.date.month}-${this.date.day}`)
        .add(11,'hours').add(30,'minutes')
        .utc();
      //add 'timestamp' value in form
      this.addForm.patchValue({
        timestamp: moment(dateMoment).valueOf()
      });
      //console.log(dateMoment, moment(dateMoment).format('LL'), moment(dateMoment).valueOf());
    }
  }
}
