import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  private exists: boolean = false;
  private user = {};
  private modalError: string;

  constructor(private titleService: Title, private formBuilder: FormBuilder,
    private _user: UserService, private modalService: NgbModal) {
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

  modalConfirm(modalContent: any) {
    this.submitAttempt = true;
    //verify if there is a refeicao in this date
    this._user.exists(this.userForm.value.ra)
      .then(result => {
        console.log('result', result);
        this.exists = result.exists;
        if (this.userForm.valid) {
          if (result.exists) {
            this.modalService.open(modalContent);
            this.modalError = "Já existe um usuário com este RA.";
            this.user = result.snapshot[Object.keys(result.snapshot)[0]];
          } else {
            this.modalService.open(modalContent).result
              .then(result => {
                if (result) {
                  this.register();
                } else {
                  console.log('operation cancelled');
                }
              })
              .catch(reason => console.log('error in modal result', reason));
          }
        } else {
          this.formError = 'Todos os campos são obrigatórios.';
        }
      }).catch(reason => console.log('error in UserService#exists', reason));
  }

  register(): void {
    this.submitAttempt = true;
    if (this.userForm.valid) {
      if (this.userForm.value['veg'] == '') {
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

  randomUser(): void {
    const password = `${Math.floor(Math.random() * 1000000)}`;

    this.userForm.setValue({
      name: `${Math.floor(Math.random() * 1000)}`,
      email: `${Math.floor(Math.random() * 1000)}@${Math.floor(Math.random() * 1000)}.com`,
      ra: `${Math.floor(Math.random() * 1000000000)}`,
      password: password,
      confirmPass: password,
      veg: true
    })
  }

}
