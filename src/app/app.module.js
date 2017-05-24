"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var angularfire2_1 = require("angularfire2");
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
var firebase_config_1 = require("./firebase-config");
var login_component_1 = require("./login/login.component");
var cardapio_component_1 = require("./cardapio/cardapio.component");
var cardapio_detail_component_1 = require("./cardapio-detail/cardapio-detail.component");
var estatisticas_component_1 = require("./estatisticas/estatisticas.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            angularfire2_1.AngularFireModule.initializeApp(firebase_config_1.FirebaseConfig),
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            cardapio_component_1.CardapioComponent,
            cardapio_detail_component_1.CardapioDetailComponent,
            estatisticas_component_1.EstatisticasComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map