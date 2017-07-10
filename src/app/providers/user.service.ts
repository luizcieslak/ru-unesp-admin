import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//import firebase namespace for functions that aren't in AngularFire2
import * as firebase from 'firebase/app';
import * as moment from 'moment';

import { AdminService } from './admin.service';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase, private _admin: AdminService) { }

  addSaldo(email: string, amount: number): firebase.Promise<any>{
    return new Promise((resolve,reject)=>{
      //get uid
      this.db.list('users/',{
        query:{
          orderByChild: 'email',
          equalTo: email
        }
      }).take(1).subscribe(snapshots =>{
        if(snapshots.length == 1){
          resolve( Promise.all([
            firebase.database().ref(`users/${snapshots[0].$key}/saldo`).transaction(saldo => saldo + amount),
            firebase.database().ref(`users/${snapshots[0].$key}/saldo_history`).push({
              type: 'recarga',
              admin: this._admin.email,
              timestamp: moment().valueOf()
            })
          ]));
        }else{
          reject('Usuário não encontrado.');
        }
      })
    })
  }

}
