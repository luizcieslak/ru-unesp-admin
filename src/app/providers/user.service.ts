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

  addSaldo(ra: string, amount: number): firebase.Promise<any> {
    return new Promise((resolve, reject) => {
      //get uid
      this.db.list('users/', {
        query: {
          orderByChild: 'ra',
          equalTo: ra
        }
      }).take(1).subscribe(snapshots => {
        if (snapshots.length == 1) {
          resolve(Promise.all([
            firebase.database().ref(`users/${snapshots[0].$key}/saldo`).transaction(saldo => saldo + amount),
            firebase.database().ref(`users/${snapshots[0].$key}/saldo_history`).push({
              type: 'recarga',
              description: `Adicionou ${amount} tíquetes de refeição`,
              admin: this._admin.email,
              timestamp: moment().valueOf()
            })
          ]));
        } else {
          reject('Usuário não encontrado.');
        }
      })
    })
  }

  newUser(user: any): firebase.Promise<any> {
    return this._admin.createUser(user.email, user.password)
      .then(response => {
        console.log(response);
        return this.postSignup(response.uid, user);
      })
      .catch(reason => console.log('error in UserService#newUser', reason));
  }

  /**
   * Function called after AuthService.signUp() to store user's additional info.
   * @argument {string} uid id do usuário
   */
  postSignup(uid: string, data): firebase.Promise<any> {
    const user = this.db.object('users/' + uid);
    return user.set(({
      name: data.name,
      ra: data.ra,
      email: data.email,
      saldo: 0,
      refeicoes: {},
      veg: data.veg,
      created_at: firebase.database.ServerValue.TIMESTAMP,
      updated_at: firebase.database.ServerValue.TIMESTAMP
    }));
  }

  exists(ra: string): firebase.Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.database().ref('users/')
        .orderByChild('ra')
        .equalTo(ra)
        .once('value')
        .then(snap => {
          if (snap.val() !== null) resolve({ exists: true, snapshot: snap.val() });
          else resolve({ exists: false, snapshot: null });
        })
        .catch(reason => reject(reason));
    })
  }

}
