import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './cardapio.component.html'
})
export class CardapioComponent { 
  //A FormGroup is a collection of FormControls, which is inputed in html.
  private cardapioForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private loginError: string;

  constructor(private formBuilder: FormBuilder) {

      //Create FormBuilder with your inputs and their Validators.
      this.cardapioForm = this.formBuilder.group({
        base1: ['', Validators.required],
        base2: ['', Validators.required],
        principal: ['', Validators.required],
        veg: ['', Validators.required],
        guarnicao: ['', Validators.required],
        salada1: ['', Validators.required],
        salada2: ['', Validators.required],
        sobremesa: ['', Validators.required],
        suco: ['', Validators.required]
      });
  }

}