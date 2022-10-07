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
exports.PrimeiraConsultaGeral = void 0;
var typeorm_1 = require("typeorm");
var PrimeiraConsultaGeral = /** @class */ (function () {
    function PrimeiraConsultaGeral() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "EmpresaId" }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "empresaId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "PacienteId" }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "pacienteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProfissionalId", nullable: true }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "profissionalId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataConsulta", nullable: true }),
        __metadata("design:type", Date)
    ], PrimeiraConsultaGeral.prototype, "dataConsulta", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "HistoriaAtual", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "historiaAtual", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "SintomasAssociados", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "sintomasAssociados", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Comorbidades", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "comorbidades", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "MedicacoesEmUso", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "medicacoesEmUso", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Cirurgias", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "cirurgias", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Alergias", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "alergias", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Hemotransfusao", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "hemotransfusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "HistoriaHAS", nullable: true, length: 2000 }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "historiaHas", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "HistoriaDM", nullable: true, length: 2000 }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "historiaDm", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            name: "HistoriaCardiovascular",
            nullable: true,
            length: 2000,
        }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "historiaCardiovascular", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            name: "HistoriaNeopasias",
            nullable: true,
            length: 2000,
        }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "historiaNeopasias", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "HistoriaOutras", nullable: true, length: 2000 }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "historiaOutras", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "TabagismoTempo", nullable: true }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "tabagismoTempo", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "EtilismoTempo", nullable: true }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "etilismoTempo", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { name: "PA", nullable: true, precision: 5, scale: 1 }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "pa", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "FC", nullable: true }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "fc", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "SAT", nullable: true }),
        __metadata("design:type", Number)
    ], PrimeiraConsultaGeral.prototype, "sat", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "ExameFisico", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "exameFisico", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Conduta", nullable: true }),
        __metadata("design:type", String)
    ], PrimeiraConsultaGeral.prototype, "conduta", void 0);
    PrimeiraConsultaGeral = __decorate([
        (0, typeorm_1.Index)("PK_PrimeiraConsultaGeral", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("PrimeiraConsultaGeral", { schema: "dbo" })
    ], PrimeiraConsultaGeral);
    return PrimeiraConsultaGeral;
}());
exports.PrimeiraConsultaGeral = PrimeiraConsultaGeral;
//# sourceMappingURL=PrimeiraConsultaGeral.js.map