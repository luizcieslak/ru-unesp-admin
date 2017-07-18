import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Title }     from '@angular/platform-browser';

import { UserService } from '../../providers/user.service';

import { EmailValidator } from '../../validators/email';
import { RaValidator } from '../../validators/ra';
import { matchingPasswords } from '../../validators/matching-passwords';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  //A FormGroup is a collection of FormControls, which is inputed in html.
  private userForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private formError: string;

  constructor(private titleService: Title, private formBuilder: FormBuilder, 
    private _user: UserService) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Novo usuário');
    
    //Create FormBuilder with your inputs and their Validators.
    this.userForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      ra: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9), RaValidator.isValid,])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPass: ['', Validators.required],
      veg: ['', Validators.nullValidator]
    }, { validator: matchingPasswords('password', 'confirmPass') });
  }

  ngOnInit() {
  }

  register(): void {
    this.submitAttempt = true;
    if (this.userForm.valid) {
      if(this.userForm.value['veg'] == ''){
        this.userForm.patchValue({
          veg: true
        });
      }
      console.log(this.userForm.value);
      this._user.newUser(this.userForm.value)
        .then(_ => alert('Usuário adicionado no banco de dados'))
        .catch(reason => { this.formError = reason.message })
    }
  }

  randomUser():void {
    const password = `${Math.floor(Math.random()*1000000)}`;

    this.userForm.setValue({
      name: `${Math.floor(Math.random()*1000)}`,
      email: `${Math.floor(Math.random()*1000)}@${Math.floor(Math.random()*1000)}.com`,
      ra: `${Math.floor(Math.random()*1000000000)}`,
      password: password,
      confirmPass: password,
      veg: true
    })
  }

}
