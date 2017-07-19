import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomepageComponent } from '../homepage/homepage.component';

import { NewUserComponent } from '../users/new-user/new-user.component'
import { SaldoComponent } from '../users/saldo/saldo.component';

import { NewRefeicaoComponent } from '../refeicoes/new-refeicao/new-refeicao.component';
import { EditRefeicaoComponent } from '../refeicoes/edit-refeicao/edit-refeicao.component';
import { RefeicaoDetailComponent } from '../refeicoes/refeicao-detail/refeicao-detail.component';
import { EstatisticasComponent } from '../refeicoes/estatisticas/estatisticas.component';

import { PageNotFoundComponent } from '../not-found/not-found.component';

import { AuthGuard } from '../providers/auth-guard.service';

const routes: Routes = [
  {
    path: 'refeicoes',
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: NewRefeicaoComponent },
      { path: 'detail/:year/:month/:day', component: RefeicaoDetailComponent },
      { path: 'detail', component: RefeicaoDetailComponent },
      { path: 'edit/:year/:month/:day', component: EditRefeicaoComponent },
      { path: 'edit', component: EditRefeicaoComponent },
      { path: 'estatisticas', component: EstatisticasComponent }
    ]
  },

  {
    path: 'users',
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: NewUserComponent },
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