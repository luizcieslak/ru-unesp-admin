import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {

      //Create FormBuilder with your inputs and their Validators.
      this.loginForm = this.formBuilder.group({
        email: ['',  Validators.required ], //TODO: Add EmailValidator
        password: ['', Validators.required]
      });
  }

 login(): void {
    this.submitAttempt = true;
    if(this.loginForm.valid){
      //this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password)
        //.then(() => this.onLoginSuccess())  //if login is sucessfull, go to home page
        //.catch(error => { this.loginError = error.message }); //else, show the error.
    }else{
      console.log("loginForm is not valid.");
    }
  }
}