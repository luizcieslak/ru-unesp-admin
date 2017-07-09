import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router }                 from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { EmailValidator } from '../validators/email';

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  //A FormGroup is a collection of FormControls, which is inputed in html.
  private loginForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private loginError: string;

  constructor(private formBuilder: FormBuilder, private _auth: AngularFireAuth,
    private router: Router) {
      //Create FormBuilder with your inputs and their Validators.
      this.loginForm = this.formBuilder.group({
        email: ['',  Validators.compose([Validators.required, EmailValidator.isValid]) ],
        password: ['', Validators.required]
      });
  }

 login(): void {
    this.submitAttempt = true;
    if(this.loginForm.valid){
      this._auth.auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password)
        .then(() => this.router.navigate(['detail']))  //if login is sucessfull
        .catch(error => { this.loginError = error.message }); //else, show the error.
    }else{
      console.log("loginForm is not valid.");
    }
  }

 fastLogin(): void{
   this._auth.auth.signInWithEmailAndPassword("admin@admin.com","ruadmin")
      .then(() => this.router.navigate(['detail']))  //if login is sucessfull
      .catch(error => { this.loginError = error.message }); //else, show the error.
 }
}