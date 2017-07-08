import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
  model: any;
  
  gotoDate(model: any): void{
    console.log('date: '+ model.year + '/' + model.month + '/' + model.day )
  }
}
