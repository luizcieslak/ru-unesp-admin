"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var auth_1 = require("angularfire2/auth");
var firebase_config_1 = require("./firebase-config");
var login_component_1 = require("./login/login.component");
var cardapio_component_1 = require("./cardapio/cardapio.component");
var cardapio_detail_component_1 = require("./cardapio-detail/cardapio-detail.component");
var estatisticas_component_1 = require("./estatisticas/estatisticas.component");
var not_found_component_1 = require("./not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            angularfire2_1.AngularFireModule.initializeApp(firebase_config_1.FirebaseConfig),
            database_1.AngularFireDatabaseModule,
            auth_1.AngularFireAuthModule // imports firebase/auth, only needed for auth features
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            cardapio_component_1.CardapioComponent,
            cardapio_detail_component_1.CardapioDetailComponent,
            estatisticas_component_1.EstatisticasComponent,
            not_found_component_1.PageNotFoundComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map