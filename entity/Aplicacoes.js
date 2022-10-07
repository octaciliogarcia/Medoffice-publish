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
exports.Aplicacoes = void 0;
var typeorm_1 = require("typeorm");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var Aplicacoes = /** @class */ (function () {
    function Aplicacoes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Aplicacoes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", {
            name: "Paciente",
            nullable: true,
            length: 50,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "paciente", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Minutos", nullable: true }),
        __metadata("design:type", Number)
    ], Aplicacoes.prototype, "minutos", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Situacao", nullable: true, default: 0 }),
        __metadata("design:type", Number)
    ], Aplicacoes.prototype, "situacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "HorarioIni", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "horarioIni", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "HorarioFinal", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "horarioFinal", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Local", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "local", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", {
            name: "Marcacao",
            nullable: true,
            length: 20,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "marcacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", {
            name: "Horario",
            nullable: true,
            length: 4,
            default: function () { return "''"; },
        }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "horario", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Tipo" }),
        __metadata("design:type", Number)
    ], Aplicacoes.prototype, "tipo", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "IdAgenda" }),
        __metadata("design:type", Number)
    ], Aplicacoes.prototype, "idagenda", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "Dataref", nullable: true }),
        __metadata("design:type", Date)
    ], Aplicacoes.prototype, "dataref", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "PacienteId", nullable: true }),
        __metadata("design:type", Number)
    ], Aplicacoes.prototype, "pacienteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Obs", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Aplicacoes.prototype, "obs", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.aplicacoes; }),
        (0, typeorm_1.JoinColumn)([{ name: "ProfissionaisAgendasId", referencedColumnName: "id" }]),
        __metadata("design:type", ProfissionaisAgendas_1.ProfissionaisAgendas)
    ], Aplicacoes.prototype, "profissionaisAgendas", void 0);
    Aplicacoes = __decorate([
        (0, typeorm_1.Index)("PK_Aplicacoes", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Aplicacoes", { schema: "dbo" })
    ], Aplicacoes);
    return Aplicacoes;
}());
exports.Aplicacoes = Aplicacoes;
//# sourceMappingURL=Aplicacoes.js.map