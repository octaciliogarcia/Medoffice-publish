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
exports.UsuariosAgendas = void 0;
var typeorm_1 = require("typeorm");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var Usuarios_1 = require("./Usuarios");
var UsuariosAgendas = /** @class */ (function () {
    function UsuariosAgendas() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], UsuariosAgendas.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario" }),
        __metadata("design:type", Number)
    ], UsuariosAgendas.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], UsuariosAgendas.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], UsuariosAgendas.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.usuariosAgendas; }, { eager: true }),
        (0, typeorm_1.JoinColumn)([{ name: "AgendaConsultaId", referencedColumnName: "id" }]),
        __metadata("design:type", ProfissionaisAgendas_1.ProfissionaisAgendas)
    ], UsuariosAgendas.prototype, "agendaConsulta", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.usuariosAgendas; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], UsuariosAgendas.prototype, "usuario2", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.usuariosAgendas2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], UsuariosAgendas.prototype, "usuarioExclusao", void 0);
    UsuariosAgendas = __decorate([
        (0, typeorm_1.Index)("PK_UsuariosAgendas", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("UsuariosAgendas", { schema: "dbo" })
    ], UsuariosAgendas);
    return UsuariosAgendas;
}());
exports.UsuariosAgendas = UsuariosAgendas;
//# sourceMappingURL=UsuariosAgendas.js.map