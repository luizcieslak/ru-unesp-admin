import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { PageNotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';

//Users
import { UsersModule } from './users/users.module';

//Refeicoes
import { RefeicoesModule } from './refeicoes/refeicoes.module';

//Routes
import { AppRoutingModule } from './routes/app-routing.module';

//Providers
import { AuthGuard } from './providers/auth-guard.service';
import { AdminService } from './providers/admin.service';
import { RefeicaoService } from './providers/refeicao.service';
import { UserService } from './providers/user.service';

//Pipes 
import { PipesModule } from './pipes/pipes.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    UsersModule,
    RefeicoesModule,
    PipesModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomepageComponent,
    LoadingComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthGuard,
    AdminService,
    RefeicaoService,
    UserService,
    Title
  ]
})
export class AppModule { }
