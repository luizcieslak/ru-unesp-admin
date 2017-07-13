import { Component, Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

//To config NgbDatepicker
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

//Providers
import { RefeicaoService } from '../providers/refeicao.service';

import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

//Moment lib
import * as moment from 'moment';
moment.locale('pt-br');

const I18N_VALUES = {
  'pt-br': {
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
};

// Define a service holding the language. You probably already have one if your app is i18ned.
@Injectable()
export class I18n {
  language = 'en';
};

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
};

@Component({
  selector: 'my-app',
  templateUrl: './cardapio.component.html',
  providers: [I18n, CardapioComponent, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}] // define custom NgbDatepickerI18n provider
})
export class CardapioComponent {
  //A FormGroup is a collection of FormControls, which is inputed in html.
  private addForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private formError: string;

  date: any;

  constructor(private formBuilder: FormBuilder, private _refeicao: RefeicaoService,
    ngbConfig: NgbDatepickerConfig, _i18n: I18n) {
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

    _i18n.language = 'pt-br';

    // customize default values of datepickers used by this component tree
    const now = moment();
    ngbConfig.minDate = { year: now.year(), month: now.month(), day: now.day()};
    ngbConfig.maxDate = { year: 2099, month: 12, day: 31 };

    // days that don't belong to current month are not visible
    ngbConfig.outsideDays = 'hidden';

    // weekends are disabled
    ngbConfig.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    };
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
