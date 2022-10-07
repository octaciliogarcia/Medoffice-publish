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
exports.ProfissionaisConvenios = void 0;
var typeorm_1 = require("typeorm");
var Profissionais_1 = require("./Profissionais");
var Convenios_1 = require("./Convenios");
var Usuarios_1 = require("./Usuarios");
var ProfissionaisConvenios = /** @class */ (function () {
    function ProfissionaisConvenios() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProfissionaisConvenios.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "LimiteAgendamentosDiarios", nullable: true }),
        __metadata("design:type", Number)
    ], ProfissionaisConvenios.prototype, "limiteAgendamentosDiarios", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "LimiteAgendamentosMensais", nullable: true }),
        __metadata("design:type", Number)
    ], ProfissionaisConvenios.prototype, "limiteAgendamentosMensais", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ProfissionaisConvenios.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ProfissionaisConvenios.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Profissionais_1.Profissionais; }, function (profissionais) { return profissionais.profissionaisConvenios; }),
        (0, typeorm_1.JoinColumn)([{ name: "ProfissionalId", referencedColumnName: "id" }]),
        __metadata("design:type", Profissionais_1.Profissionais)
    ], ProfissionaisConvenios.prototype, "profissional", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Convenios_1.Convenios; }, function (convenios) { return convenios.profissionaisConvenios; }),
        (0, typeorm_1.JoinColumn)([{ name: "ConvenioId", referencedColumnName: "id" }]),
        __metadata("design:type", Convenios_1.Convenios)
    ], ProfissionaisConvenios.prototype, "convenio", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionaisConvenios; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ProfissionaisConvenios.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionaisConvenios2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ProfissionaisConvenios.prototype, "usuarioExclusao", void 0);
    ProfissionaisConvenios = __decorate([
        (0, typeorm_1.Index)("PK_ProfissionaisConvenios", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ProfissionaisConvenios", { schema: "dbo" })
    ], ProfissionaisConvenios);
    return ProfissionaisConvenios;
}());
exports.ProfissionaisConvenios = ProfissionaisConvenios;
//# sourceMappingURL=ProfissionaisConvenios.js.map