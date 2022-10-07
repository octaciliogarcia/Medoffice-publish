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
exports.Usuarios = void 0;
var typeorm_1 = require("typeorm");
var AgendasConsultas_1 = require("./AgendasConsultas");
var ConselhosRegionais_1 = require("./ConselhosRegionais");
var Convenios_1 = require("./Convenios");
var Empresas_1 = require("./Empresas");
var Pacientes_1 = require("./Pacientes");
var Profissionais_1 = require("./Profissionais");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var ProfissionaisAgendasHorarios_1 = require("./ProfissionaisAgendasHorarios");
var ProfissionaisConvenios_1 = require("./ProfissionaisConvenios");
var UsuariosAgendas_1 = require("./UsuariosAgendas");
var UsuariosEmpresas_1 = require("./UsuariosEmpresas");
var UsuariosPermissoes_1 = require("./UsuariosPermissoes");
var Usuarios = /** @class */ (function () {
    function Usuarios() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", length: 80 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Email", length: 100 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Celular", length: 20 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "celular", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Senha", length: 128 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "senha", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Situacao", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "situacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Aplicacao", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "aplicacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], Usuarios.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioId", nullable: true }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "usuarioId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Usuarios.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "AceiteTermos" }),
        __metadata("design:type", Date)
    ], Usuarios.prototype, "aceiteTermos", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Perfil", nullable: true, length: 3 }),
        __metadata("design:type", String)
    ], Usuarios.prototype, "perfil", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AgendasConsultas_1.AgendasConsultas; }, function (agendasConsultas) { return agendasConsultas.usuarioAgendamento; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "agendasConsultas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AgendasConsultas_1.AgendasConsultas; }, function (agendasConsultas) { return agendasConsultas.usuarioCancelamento; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "agendasConsultas2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AgendasConsultas_1.AgendasConsultas; }, function (agendasConsultas) { return agendasConsultas.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "agendasConsultas3", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConselhosRegionais_1.ConselhosRegionais; }, function (conselhosRegionais) { return conselhosRegionais.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "conselhosRegionais", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConselhosRegionais_1.ConselhosRegionais; }, function (conselhosRegionais) { return conselhosRegionais.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "conselhosRegionais2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Convenios_1.Convenios; }, function (convenios) { return convenios.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "convenios", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Convenios_1.Convenios; }, function (convenios) { return convenios.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "convenios2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Empresas_1.Empresas; }, function (empresas) { return empresas.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "empresas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Empresas_1.Empresas; }, function (empresas) { return empresas.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "empresas2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Pacientes_1.Pacientes; }, function (pacientes) { return pacientes; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "pacientes", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Pacientes_1.Pacientes; }, function (pacientes) { return pacientes.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "pacientes2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Profissionais_1.Profissionais; }, function (profissionais) { return profissionais.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionais", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Profissionais_1.Profissionais; }, function (profissionais) { return profissionais.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionais2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionaisAgendas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionaisAgendas2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisAgendasHorarios_1.ProfissionaisAgendasHorarios; }, function (profissionaisAgendasHorarios) { return profissionaisAgendasHorarios.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionaisAgendasHorarios", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisAgendasHorarios_1.ProfissionaisAgendasHorarios; }, function (profissionaisAgendasHorarios) {
            return profissionaisAgendasHorarios.usuarioExclusao;
        }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionaisAgendasHorarios2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisConvenios_1.ProfissionaisConvenios; }, function (profissionaisConvenios) { return profissionaisConvenios.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionaisConvenios", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisConvenios_1.ProfissionaisConvenios; }, function (profissionaisConvenios) { return profissionaisConvenios.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "profissionaisConvenios2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosAgendas_1.UsuariosAgendas; }, function (usuariosAgendas) { return usuariosAgendas.usuario2; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "usuariosAgendas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosAgendas_1.UsuariosAgendas; }, function (usuariosAgendas) { return usuariosAgendas.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "usuariosAgendas2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosEmpresas_1.UsuariosEmpresas; }, function (usuariosEmpresas) { return usuariosEmpresas.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "usuariosEmpresas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosEmpresas_1.UsuariosEmpresas; }, function (usuariosEmpresas) { return usuariosEmpresas.usuario2; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "usuariosEmpresas2", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosEmpresas_1.UsuariosEmpresas; }, function (usuariosEmpresas) { return usuariosEmpresas.usuarioExclusao; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "usuariosEmpresas3", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosPermissoes_1.UsuariosPermissoes; }, function (usuariosPermissoes) { return usuariosPermissoes.usuario; }),
        __metadata("design:type", Array)
    ], Usuarios.prototype, "usuariosPermissoes", void 0);
    Usuarios = __decorate([
        (0, typeorm_1.Index)("PK_USUARIOS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Usuarios", { schema: "dbo" })
    ], Usuarios);
    return Usuarios;
}());
exports.Usuarios = Usuarios;
//# sourceMappingURL=Usuarios.js.map