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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalasAplicacoes = void 0;
var typeorm_1 = require("typeorm");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var SalasAplicacoes = /** @class */ (function () {
    function SalasAplicacoes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], SalasAplicacoes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Sala", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], SalasAplicacoes.prototype, "sala", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.salasAplicacoes; }),
        (0, typeorm_1.JoinColumn)([{ name: "ProfissionaisAgendasId", referencedColumnName: "id" }]),
        __metadata("design:type", ProfissionaisAgendas_1.ProfissionaisAgendas)
    ], SalasAplicacoes.prototype, "profissionaisAgendas", void 0);
    SalasAplicacoes = __decorate([
        (0, typeorm_1.Index)("PK_SalasAplicacoes", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("SalasAplicacoes", { schema: "dbo" })
    ], SalasAplicacoes);
    return SalasAplicacoes;
}());
exports.SalasAplicacoes = SalasAplicacoes;
//# sourceMappingURL=SalasAplicacoes.js.map