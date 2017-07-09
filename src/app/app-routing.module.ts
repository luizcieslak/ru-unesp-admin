import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioDetailComponent } from './cardapio-detail/cardapio-detail.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { SaldoComponent } from './saldo/saldo.component';

import { PageNotFoundComponent } from './not-found.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: 'refeicoes',
    canActivate: [AuthGuard],
    children: [
      { path: 'add', component: CardapioComponent },
      { path: 'detail', component: CardapioDetailComponent },
      { path: 'estatisticas', component: EstatisticasComponent }
    ]
  },

  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      { path: 'saldo', component: SaldoComponent }
    ]
  },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }