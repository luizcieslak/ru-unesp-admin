import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { RefeicaoService } from '../providers/refeicao.service';

@Component({
  selector: 'my-app',
  templateUrl: './cardapio.component.html'
})
export class CardapioComponent { 
  //A FormGroup is a collection of FormControls, which is inputed in html.
  private addForm: FormGroup;

  //Boolean variable that stores if user tries to submit the form.
  private submitAttempt: boolean;

  //String variable that stores the server error in a failed signin.
  private formError: string;

  constructor(private formBuilder: FormBuilder, private _refeicao:RefeicaoService) {

      //Create FormBuilder with your inputs and their Validators.
      this.addForm = this.formBuilder.group({
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

  register(): void{
    this.submitAttempt = true;
    if(this.addForm.valid){
      this._refeicao.add(this.addForm.value)
        .then(_=> console.log('refeicao added'))
        .catch(reason => console.log('error in register',reason))
    }else{
      this.formError = 'Todos os campos são obrigatórios.'
    }
  }

}