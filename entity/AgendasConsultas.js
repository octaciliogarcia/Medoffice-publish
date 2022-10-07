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
exports.AgendasConsultas = void 0;
var typeorm_1 = require("typeorm");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var Pacientes_1 = require("./Pacientes");
var Usuarios_1 = require("./Usuarios");
var AgendasConsultas = /** @class */ (function () {
    function AgendasConsultas() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Sequencia", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "sequencia", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", { name: "DataAgenda", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "dataAgenda", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Hora", length: 4 }),
        __metadata("design:type", String)
    ], AgendasConsultas.prototype, "hora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "TipoAtendimento", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "tipoAtendimento", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "DuracaoConsulta", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "duracaoConsulta", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "PacienteNome", length: 80 }),
        __metadata("design:type", String)
    ], AgendasConsultas.prototype, "pacienteNome", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "FoneContato", length: 40 }),
        __metadata("design:type", String)
    ], AgendasConsultas.prototype, "foneContato", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "Confirmado", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "confirmado", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "ConfirmacaoRecebidaEm", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "confirmacaorecebidaem", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "ConfirmacaoEnviadaEm", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "confirmacaoenviadaem", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProcedimentoPrincipal", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "procedimentoPrincipal", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ConvenioId", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "convenio", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "FaseAtendimento", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultas.prototype, "faseAtendimento", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataReagendada", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "dataReagendada", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "MotivoCancelamento", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], AgendasConsultas.prototype, "motivoCancelamento", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultas.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Observacao", length: 200 }),
        __metadata("design:type", String)
    ], AgendasConsultas.prototype, "observacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Vinculo", length: 200 }),
        __metadata("design:type", String)
    ], AgendasConsultas.prototype, "vinculo", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.agendasConsultas; }, { eager: true }),
        (0, typeorm_1.JoinColumn)([{ name: "ProfissionaisAgendasId", referencedColumnName: "id" }]),
        __metadata("design:type", ProfissionaisAgendas_1.ProfissionaisAgendas)
    ], AgendasConsultas.prototype, "profissionaisAgendas", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Pacientes_1.Pacientes; }, function (pacientes) { return pacientes.agendasConsultas; }, { eager: true }),
        (0, typeorm_1.JoinColumn)([{ name: "PacienteId", referencedColumnName: "id" }]),
        __metadata("design:type", Pacientes_1.Pacientes)
    ], AgendasConsultas.prototype, "paciente", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.agendasConsultas; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioAgendamento", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], AgendasConsultas.prototype, "usuarioAgendamento", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.agendasConsultas2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioCancelamento", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], AgendasConsultas.prototype, "usuarioCancelamento", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.agendasConsultas3; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], AgendasConsultas.prototype, "usuarioExclusao", void 0);
    AgendasConsultas = __decorate([
        (0, typeorm_1.Index)("PK_AGENDASCONSULTAS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("AgendasConsultas", { schema: "dbo" })
    ], AgendasConsultas);
    return AgendasConsultas;
}());
exports.AgendasConsultas = AgendasConsultas;
//# sourceMappingURL=AgendasConsultas.js.map