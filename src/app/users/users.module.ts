import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewUserComponent } from './new-user/new-user.component';
import { SaldoComponent } from './saldo/saldo.component';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    NewUserComponent,
    SaldoComponent,
  ]
})
export class UsersModule { }
