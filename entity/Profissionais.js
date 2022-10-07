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
exports.Profissionais = void 0;
var typeorm_1 = require("typeorm");
var Empresas_1 = require("./Empresas");
var Usuarios_1 = require("./Usuarios");
var ProfissionaisAgendas_1 = require("./ProfissionaisAgendas");
var ProfissionaisConvenios_1 = require("./ProfissionaisConvenios");
var Profissionais = /** @class */ (function () {
    function Profissionais() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Profissionais.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", length: 80 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Cep", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "cep", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Endereco", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "endereco", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Numero", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "numero", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Sexo", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "sexo", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Complemento", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "complemento", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Bairro", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "bairro", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Cidade", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "cidade", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Uf", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "uf", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Cpf", nullable: true, length: 11 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "cpf", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Rg", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "rg", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Email", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "TokenMemed", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "tokenMemed", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DtNasc", nullable: true }),
        __metadata("design:type", Date)
    ], Profissionais.prototype, "dtNasc", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ConselhoProfissional", nullable: true }),
        __metadata("design:type", Number)
    ], Profissionais.prototype, "conselhoProfissional", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            name: "RegistroProfissional",
            nullable: true,
            length: 30,
        }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "registroProfissional", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Status", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Profissionais.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "NrProntuarioAut", nullable: true }),
        __metadata("design:type", Number)
    ], Profissionais.prototype, "nrProntuarioAut", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], Profissionais.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Profissionais.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "EmpresaId", nullable: true }),
        __metadata("design:type", Empresas_1.Empresas)
    ], Profissionais.prototype, "empresaid", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ModeloAgendaConsulta", nullable: true }),
        __metadata("design:type", Number)
    ], Profissionais.prototype, "modeloAgendaConsulta", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionais; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Profissionais.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.profissionais2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Profissionais.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisAgendas_1.ProfissionaisAgendas; }, function (profissionaisAgendas) { return profissionaisAgendas.profissional; }),
        __metadata("design:type", Array)
    ], Profissionais.prototype, "profissionaisAgendas", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisConvenios_1.ProfissionaisConvenios; }, function (profissionaisConvenios) { return profissionaisConvenios.profissional; }),
        __metadata("design:type", Array)
    ], Profissionais.prototype, "profissionaisConvenios", void 0);
    Profissionais = __decorate([
        (0, typeorm_1.Index)("PK_PROFISSIONAIS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Profissionais", { schema: "dbo" })
    ], Profissionais);
    return Profissionais;
}());
exports.Profissionais = Profissionais;
//# sourceMappingURL=Profissionais.js.map