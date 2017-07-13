import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AdminService } from './providers/admin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  date: any;

  adminAuth: boolean;
  admin: FirebaseObjectObservable<any>;

  constructor(private router: Router, private _admin: AdminService, private _auth: AngularFireAuth) {
    _auth.authState.subscribe(auth => {
      this.adminAuth = auth !== null;
      console.log('adminAuth', this.adminAuth);
      if (this.adminAuth) {
        this.admin = _admin.adminObservable();
      }
    })
  }

  gotoDate(date: any): void {
    console.log('date: ' + date.year + '/' + date.month + '/' + date.day);
    this.router.navigate(['refeicoes/detail', date.year,date.month,date.day]);
  }

  logout(): void {
    this._admin.signOut()
      .then(_ => this.router.navigate(['/login']))
      .catch(reason => console.log('error in AppComponent#logout', reason));
  }
}
