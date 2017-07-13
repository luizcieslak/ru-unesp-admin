import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirebaseListObservable } from 'angularfire2/database';


//providers
import { RefeicaoService } from '../providers/refeicao.service';

@Component({
  selector: 'my-app',
  templateUrl: './cardapio-detail.component.html'
})
export class CardapioDetailComponent implements OnInit {

  date: { year: number, month: number, day: number };

  sub: Subscription;

  refeicao: FirebaseListObservable<any>

  constructor(private route: ActivatedRoute, private router: Router,
  private _refeicao: RefeicaoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length !== 0) { //checking if object is empty
        this.date = {
          year: +params['year'],
          month: +params['month'],
          day: +params['day']
        }
        this.gotoDate(this.date);
      }
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  gotoDate(date: any) {
    //retrieve info from db
    this.refeicao = this._refeicao.refFromDatepicker(date);
    this.refeicao.take(1).subscribe(refeicao => {
      console.log(refeicao.length);
    });
  }
}