import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'my-app',
  templateUrl: './cardapio-detail.component.html'
})
export class CardapioDetailComponent {
  time = { hour: 13, minute: 30 };

  model: NgbDateStruct;
  date: { year: number, month: number };

  selectToday() {
    this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
  }
}