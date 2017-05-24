import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseConfig } from './firebase-config';

import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioDetailComponent } from './cardapio-detail/cardapio-detail.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    //AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    //AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  declarations: [ 
    AppComponent,
    LoginComponent,
    CardapioComponent,
    CardapioDetailComponent,
    EstatisticasComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
