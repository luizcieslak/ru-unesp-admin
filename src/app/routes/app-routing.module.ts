import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CardapioComponent } from '../cardapio/cardapio.component';
import { CardapioDetailComponent } from '../cardapio-detail/cardapio-detail.component';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';
import { SaldoComponent } from '../saldo/saldo.component';
import { HomepageComponent } from '../homepage/homepage.component';

import { PageNotFoundComponent } from '../not-found/not-found.component';

import { AuthGuard } from '../providers/auth-guard.service';

const routes: Routes = [
  {
    path: 'refeicoes',
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: CardapioComponent },
      { path: 'detail/:year/:month/:day', component: CardapioDetailComponent },
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

  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }