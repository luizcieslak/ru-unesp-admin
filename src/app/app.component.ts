import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AdminService } from './providers/admin.service';

import { NgbDatepickerConfig, NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

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
  templateUrl: './app.component.html',
  providers: [I18n, AppComponent, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})
export class AppComponent {
  date: any;

  adminAuth: boolean;
  admin: FirebaseObjectObservable<any>;

  constructor(private router: Router, private _admin: AdminService, private _auth: AngularFireAuth,
    ngbConfig: NgbDatepickerConfig, _i18n: I18n) {
    _auth.authState.subscribe(auth => {
      this.adminAuth = auth !== null;
      console.log('adminAuth', this.adminAuth);
      if (this.adminAuth) {
        this.admin = _admin.adminObservable();
      }
    })

    _i18n.language = 'pt-br';

    // customize default values of datepickers used by this component tree
    const now = moment();
    ngbConfig.minDate = { year: now.year(), month: now.month(), day: now.day() };
    ngbConfig.maxDate = { year: 2099, month: 12, day: 31 };

    // days that don't belong to current month are not visible
    ngbConfig.firstDayOfWeek = 7;

    // weekends are disabled
    // ngbConfig.markDisabled = (date: NgbDateStruct) => {
    //   const d = new Date(date.year, date.month - 1, date.day);
    //   return d.getDay() === 0 || d.getDay() === 6;
    // };
  }

  gotoDate(date: any): void {
    console.log('date: ' + date.year + '/' + date.month + '/' + date.day);
    this.router.navigate(['refeicoes/detail', date.year, date.month, date.day]);
  }

  logout(): void {
    this._admin.signOut()
      .then(_ => this.router.navigate(['']))
      .catch(reason => console.log('error in AppComponent#logout', reason));
  }
}
