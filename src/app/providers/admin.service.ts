import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'

//import firebase namespace for functions that aren't in AngularFire2
import * as firebase from 'firebase/app';

@Injectable()
export class AdminService {

  constructor(private _auth: AngularFireAuth, private db: AngularFireDatabase) { }

  /**
   * @returns true if user is authenticated.
   */
  get autenthicated(): boolean{
    return this._auth.authState !== null;
  }

  /**
   * @returns user's uid.
   */
  get uid(): string{
    return this._auth.authState !== null? this._auth.auth.currentUser.uid : null;
  }

  get email(): string{
    return this._auth.authState !== null? this._auth.auth.currentUser.email : null;
  }

  /**
   * Sign in into Firebase using Email.
   * @returns Firebase Promise.
   */
  signInWithEmail(email: string, password: string): firebase.Promise<any>{
    return this._auth.auth.signInWithEmailAndPassword(email,password);
  }

  signOut(): firebase.Promise<any>{
    return this._auth.auth.signOut();
  }

  adminObservable(): FirebaseObjectObservable<any>{
    return this.db.object(`admins/${this.uid}`);
  }

  createUser(email: string, password: string): firebase.Promise<any>{
    return this._auth.auth.createUserWithEmailAndPassword(email, password);
  }
}
