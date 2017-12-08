import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';
import { FirebaseListObservable } from 'angularfire2/database';

//providers
import { RefeicaoService } from '../../providers/refeicao.service';

@Component({
  selector: 'my-app',
  templateUrl: './refeicao-detail.component.html'
})
export class RefeicaoDetailComponent implements OnInit {

  date: { year: number, month: number, day: number };

  sub: Subscription;

  refeicao: FirebaseListObservable<any>;

  constructor(private titleService: Title, private route: ActivatedRoute, private router: Router,
    private _refeicao: RefeicaoService) {
    //Mudar o título do documento
    titleService.setTitle('ru-admin | Detalhes da refeição');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Object.keys(params).length !== 0) { //checking if object is empty
        this.date = {
          year: +params['year'],
          month: +params['month'],
          day: +params['day']
        }
        this.getRefeicao(this.date);
      } else {
        this.date = undefined;
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRefeicao(date: any) {
    //retrieve info from db
    this.refeicao = this._refeicao.refFromDatepicker(date);
    this.refeicao.take(1).subscribe(refeicao => {
      console.log(refeicao.length);
    });
  }

  gotoDate(date: any) {
    this.router.navigate(['refeicoes/detail', this.date.year, this.date.month, this.date.day]);
  }
}