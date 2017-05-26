"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CardapioComponent = (function () {
    function CardapioComponent(formBuilder) {
        this.formBuilder = formBuilder;
        //Create FormBuilder with your inputs and their Validators.
        this.cardapioForm = this.formBuilder.group({
            base1: ['', forms_1.Validators.required],
            base2: ['', forms_1.Validators.required],
            principal: ['', forms_1.Validators.required],
            veg: ['', forms_1.Validators.required],
            guarnicao: ['', forms_1.Validators.required],
            salada1: ['', forms_1.Validators.required],
            salada2: ['', forms_1.Validators.required],
            sobremesa: ['', forms_1.Validators.required],
            suco: ['', forms_1.Validators.required]
        });
    }
    return CardapioComponent;
}());
CardapioComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './cardapio.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CardapioComponent);
exports.CardapioComponent = CardapioComponent;
//# sourceMappingURL=cardapio.component.js.map