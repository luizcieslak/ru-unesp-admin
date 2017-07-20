import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//import firebase namespace for functions that aren't in AngularFire2
import * as firebase from 'firebase/app';
import * as moment from 'moment';

import { AdminService } from './admin.service';

@Injectable()
export class RefeicaoService {

  constructor(private db: AngularFireDatabase, private _admin: AdminService) { }

  add(refeicao: any): firebase.Promise<any> {
    //Additional info
    refeicao['created_at'] = moment().valueOf();
    refeicao['updated_at'] = moment().valueOf();
    refeicao['created_by'] = this._admin.email;
    refeicao['vagas'] = 350;
    refeicao['sold_out'] = false;
    refeicao['queue_count'] = 0;
    refeicao['queue_released'] = 0;
    refeicao['users_count'] = 0;
    refeicao['usersVeg_count'] = 0;
    return Promise.all([
      firebase.database().ref(`refeicoes/`).push(refeicao),
      firebase.database().ref('refeicoes/count').transaction(count => count + 1)
    ]);
  }

  edit(key: string, formValues: any): firebase.Promise<any>{   
    return this.db.object(`refeicoes/${key}`).update(formValues);
  }

  refFromDatepicker(date: any): FirebaseListObservable<any> {
    let timestamp = moment(`${date.year}-${date.month}-${date.day}`)
      .add(11,'hours').add(30,'minutes')
      .valueOf();
    console.log('procurando por refeicoes com a timestamp',timestamp);
    return this.db.list('refeicoes/',{
      query:{
        orderByChild: 'timestamp',
        equalTo: timestamp
      }
    })
  }

  exists(timestamp: number): firebase.Promise<any>{
    return new Promise((resolve,reject)=>{
      firebase.database().ref('refeicoes/')
      .orderByChild('timestamp')
      .equalTo(timestamp)
      .once('value')
      .then(snap => {
        if (snap.val() !== null) resolve(true);
        else resolve(false)
      })
      .catch(reason => reject(reason));
    })
  }
}
