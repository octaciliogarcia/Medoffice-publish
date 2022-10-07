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
exports.Empresas = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var Profissionais_1 = require("./Profissionais");
var UsuariosEmpresas_1 = require("./UsuariosEmpresas");
var Empresas = /** @class */ (function () {
    function Empresas() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Empresas.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "RazaoSocial", length: 80 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "razaoSocial", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "NomeFantasia", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "nomeFantasia", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "CpfCnpj", nullable: true, length: 14 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "cpfCnpj", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Cep", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "cep", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Endereco", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "endereco", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Numero", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "numero", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Complemento", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "complemento", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Bairro", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "bairro", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Cidade", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "cidade", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Uf", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "uf", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Fone", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "fone", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Celular", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "celular", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Whatsapp", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "whatsapp", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Status", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], Empresas.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Empresas.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "NrProntEmpresaAut", nullable: true }),
        __metadata("design:type", Number)
    ], Empresas.prototype, "nrProntEmpresaAut", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "PacienteEmpresa", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Empresas.prototype, "pacienteEmpresa", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.empresas; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Empresas.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.empresas2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Empresas.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Profissionais_1.Profissionais; }, function (profissionais) { return profissionais.empresa; }),
        __metadata("design:type", Array)
    ], Empresas.prototype, "profissionais", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosEmpresas_1.UsuariosEmpresas; }, function (usuariosEmpresas) { return usuariosEmpresas.empresa; }),
        __metadata("design:type", Array)
    ], Empresas.prototype, "usuariosEmpresas", void 0);
    Empresas = __decorate([
        (0, typeorm_1.Index)("PK_EMPRESAS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Empresas", { schema: "dbo" })
    ], Empresas);
    return Empresas;
}());
exports.Empresas = Empresas;
//# sourceMappingURL=Empresas.js.map