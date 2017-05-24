import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioDetailComponent } from './cardapio-detail/cardapio-detail.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'cardapio',component: CardapioComponent },
  { path: '', redirectTo: '/login',pathMatch: 'full' },
  { path: 'detail/:id', component: CardapioDetailComponent},
  { path: 'estatisticas',component: CardapioComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}