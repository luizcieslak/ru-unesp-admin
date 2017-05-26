import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './cardapio.component.html'
})
export class CardapioComponent { 
  model: NgbDateStruct;
  date: {year: number, month: number};
}