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
exports.ProfissionaisAgendasHorarios = void 0;
var typeorm_1 = require("typeorm");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var Usuarios_1 = require("./Usuarios");
var ProfissionaisAgendasHorarios = /** @class */ (function () {
    function ProfissionaisAgendasHorarios() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendasHorarios.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "DiaSemana" }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendasHorarios.prototype, "diaSemana", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Intervalo" }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendasHorarios.prototype, "intervalo", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "HoraInicio", length: 4 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendasHorarios.prototype, "horaInicio", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "HoraTermino", length: 4 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendasHorarios.prototype, "horaTermino", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ProfissionaisAgendasHorarios.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ProfissionaisAgendasHorarios.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.profissionaisAgendasHorarios; }),
        (0, typeorm_1.JoinColumn)([{ name: "ProfissionalAgendaId", referencedColumnName: "id" }]),
        __metadata("design:type", ProfissionaisAgendas_1.ProfissionaisAgendas)
    ], ProfissionaisAgendasHorarios.prototype, "profissionalAgenda", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionaisAgendasHorarios; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ProfissionaisAgendasHorarios.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionaisAgendasHorarios2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ProfissionaisAgendasHorarios.prototype, "usuarioExclusao", void 0);
    ProfissionaisAgendasHorarios = __decorate([
        (0, typeorm_1.Index)("PK_ProfissionaisAgendasHorarios", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ProfissionaisAgendasHorarios", { schema: "dbo" })
    ], ProfissionaisAgendasHorarios);
    return ProfissionaisAgendasHorarios;
}());
exports.ProfissionaisAgendasHorarios = ProfissionaisAgendasHorarios;
//# sourceMappingURL=ProfissionaisAgendasHorarios.js.map