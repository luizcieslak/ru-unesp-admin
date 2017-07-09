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
    return Promise.all([
      firebase.database().ref(`refeicoes/`).push(refeicao),
      firebase.database().ref('refeicoes/count').transaction(count => count + 1)
    ]);
  }
}
