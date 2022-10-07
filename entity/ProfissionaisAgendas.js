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
exports.ProfissionaisAgendas = void 0;
var typeorm_1 = require("typeorm");
var AgendasConsultas_1 = require("./AgendasConsultas");
var Aplicacoes_1 = require("./Aplicacoes");
var Profissionais_1 = require("./Profissionais");
var Usuarios_1 = require("./Usuarios");
var ProfissionaisAgendasHorarios_1 = require("./ProfissionaisAgendasHorarios");
var SalasAplicacoes_1 = require("./SalasAplicacoes");
var UsuariosAgendas_1 = require("./UsuariosAgendas");
var ProfissionaisAgendas = /** @class */ (function () {
    function ProfissionaisAgendas() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendas.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "NomeAgenda", length: 80 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendas.prototype, "nomeAgenda", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "UrlServico", length: 80 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendas.prototype, "urlServico", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "MensagemWhatsapp ", length: 1500 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendas.prototype, "mensagemWhatsapp", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "PermitirEncaixe", nullable: true }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendas.prototype, "permitirEncaixe", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsarOrdemChegada", nullable: true }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendas.prototype, "usarOrdemChegada", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ProfissionaisAgendas.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ProfissionaisAgendas.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "HorarioPadraoAplicacao", nullable: true }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendas.prototype, "horarioPadraoAplicacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "PossuiAgendaAplicacao", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendas.prototype, "possuiAgendaAplicacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "NrProntAgendaAut", nullable: true }),
        __metadata("design:type", Number)
    ], ProfissionaisAgendas.prototype, "nrProntAgendaAut", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "TipoAgenda", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendas.prototype, "tipoAgenda", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "ControlePorSenha", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], ProfissionaisAgendas.prototype, "controlePorSenha", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AgendasConsultas_1.AgendasConsultas; }, function (agendasConsultas) { return agendasConsultas.profissionaisAgendas; }),
        __metadata("design:type", Array)
    ], ProfissionaisAgendas.prototype, "agendasConsultas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Aplicacoes_1.Aplicacoes; }, function (aplicacoes) { return aplicacoes.profissionaisAgendas; }),
        __metadata("design:type", Array)
    ], ProfissionaisAgendas.prototype, "aplicacoes", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Profissionais_1.Profissionais; }, function (profissionais) { return profissionais.profissionaisAgendas; }, { eager: true }),
        (0, typeorm_1.JoinColumn)([{ name: "ProfissionalId", referencedColumnName: "id" }]),
        __metadata("design:type", Profissionais_1.Profissionais)
    ], ProfissionaisAgendas.prototype, "profissional", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionaisAgendas; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ProfissionaisAgendas.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionaisAgendas2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ProfissionaisAgendas.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisAgendasHorarios_1.ProfissionaisAgendasHorarios; }, function (profissionaisAgendasHorarios) {
            return profissionaisAgendasHorarios.profissionalAgenda;
        }, { eager: true }),
        __metadata("design:type", Array)
    ], ProfissionaisAgendas.prototype, "profissionaisAgendasHorarios", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return SalasAplicacoes_1.SalasAplicacoes; }, function (SalasAplicacoes) { return SalasAplicacoes.profissionaisAgendas; }, { eager: true }),
        __metadata("design:type", Array)
    ], ProfissionaisAgendas.prototype, "salasAplicacoes", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosAgendas_1.UsuariosAgendas; }, function (usuariosAgendas) { return usuariosAgendas.agendaConsulta; }),
        __metadata("design:type", Array)
    ], ProfissionaisAgendas.prototype, "usuariosAgendas", void 0);
    ProfissionaisAgendas = __decorate([
        (0, typeorm_1.Index)("PK_ProfissionaisAgendas", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ProfissionaisAgendas", { schema: "dbo" })
    ], ProfissionaisAgendas);
    return ProfissionaisAgendas;
}());
exports.ProfissionaisAgendas = ProfissionaisAgendas;
//# sourceMappingURL=ProfissionaisAgendas.js.map