import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router }                 from '@angular/router';

import { AdminService } from '../providers/admin.service';

import { EmailValidator } from '../validators/email';

import * as moment from 'moment';
moment.locale('pt-br')

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

  constructor(private formBuilder: FormBuilder, private _admin: AdminService,
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
      this._admin.signInWithEmail(this.loginForm.value.email,this.loginForm.value.password)
        .then(() => this.router.navigate(['/refeicoes/add']))  //if login is sucessfull
        .catch(error => { this.loginError = error.message }); //else, show the error.
    }else{
      console.log("loginForm is not valid.");
    }
  }

 fastLogin(): void{
   const today = moment();
   console.log(today.format('llll'),today.year(),today.month(),today.date());
   this._admin.signInWithEmail("admin@admin.com","ruadmin")
      .then(() => this.router.navigate(['/refeicoes/detail',today.year(),today.month()+1,today.date()]))  //if login is sucessfull
      .catch(error => { this.loginError = error.message }); //else, show the error.
 }
}