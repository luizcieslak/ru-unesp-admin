import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model: any;

  userAuth: boolean;

  constructor(private _auth: AngularFireAuth) {
    _auth.authState.subscribe(auth =>{
      this.userAuth = auth !== null;
      console.log('userAuth',this.userAuth);
    })
  }

  gotoDate(model: any): void {
    console.log('date: ' + model.year + '/' + model.month + '/' + model.day)
  }
}
