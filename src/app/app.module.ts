import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//External Libs
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//ENV variables
import { environment } from '../environments/environment';

//Components
import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioDetailComponent } from './cardapio-detail/cardapio-detail.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { SaldoComponent } from './saldo/saldo.component';

//Routes
import { AppRoutingModule } from './routes/app-routing.module';

//Providers
import { AuthGuard } from './providers/auth-guard.service';
import { AdminService } from './providers/admin.service';
import { RefeicaoService } from './providers/refeicao.service';
import { UserService } from './providers/user.service';

//Pipes 
import { FormatPipe } from './pipes/format-pipe';
import { FromNowPipe } from './pipes/from-now-pipe';
import { KeysPipe } from './pipes/keys-pipe';
import { FormatDatePipe } from './pipes/format-date-pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CardapioComponent,
    CardapioDetailComponent,
    EstatisticasComponent,
    PageNotFoundComponent,
    SaldoComponent,
    FromNowPipe,
    FormatPipe,
    KeysPipe,
    FormatDatePipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthGuard,
    AdminService,
    RefeicaoService,
    UserService
  ]
})
export class AppModule { }
