import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  date: any;

  adminAuth: boolean;
  admin: FirebaseObjectObservable<any>;

  constructor(private _auth: AngularFireAuth, private db: AngularFireDatabase,
  private router: Router) {
    _auth.authState.subscribe(auth =>{
      this.adminAuth = auth !== null;
      console.log('adminAuth',this.adminAuth);
      if(this.adminAuth){
        this.admin = this.db.object(`admins/${this._auth.auth.currentUser.uid}`);
      }
    })
  }

  gotoDate(date: any): void {
    console.log('date: ' + date.year + '/' + date.month + '/' + date.day)
  }

  logout(): void{
    this._auth.auth.signOut()
      .then(_=> this.router.navigate(['/login']))
      .catch(reason => console.log('error in AppComponent#logout',reason));
  }
}
