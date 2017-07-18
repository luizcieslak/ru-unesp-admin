import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewRefeicaoComponent } from './new-refeicao/new-refeicao.component';
import { EditRefeicaoComponent } from './edit-refeicao/edit-refeicao.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { RefeicaoDetailComponent } from './refeicao-detail/refeicao-detail.component';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgbModule.forRoot()
  ],
  declarations: [
    NewRefeicaoComponent,
    EditRefeicaoComponent,
    EstatisticasComponent,
    RefeicaoDetailComponent,
  ]
})
export class RefeicoesModule { }
