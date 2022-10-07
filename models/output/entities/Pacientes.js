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
exports.Pacientes = void 0;
var typeorm_1 = require("typeorm");
var AgendasConsultas_1 = require("./AgendasConsultas");
var Convenios_1 = require("./Convenios");
var Usuarios_1 = require("./Usuarios");
var Pacientes = /** @class */ (function () {
    function Pacientes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProfissionalId" }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "profissionalId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Cpf", nullable: true, length: 11 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "cpf", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Rg", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "rg", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Prontuario", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "prontuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Indicacao", nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "indicacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Fone", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "fone", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Celular", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "celular", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "NomeMae", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "nomeMae", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Endereco", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "endereco", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Numero", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "numero", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Complemento", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "complemento", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Bairro", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "bairro", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Cidade", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "cidade", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Uf", nullable: true, length: 2 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "uf", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Sexo", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "sexo", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "EstadoCivil", nullable: true }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "estadoCivil", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DtNasc", nullable: true }),
        __metadata("design:type", Date)
    ], Pacientes.prototype, "dtNasc", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Cid", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "cid", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { name: "Altura", nullable: true, precision: 5, scale: 2 }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "altura", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { name: "Peso", nullable: true, precision: 7, scale: 3 }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "peso", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "CorPele", nullable: true }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "corPele", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Profissao", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "profissao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Email", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioId", nullable: true }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "usuarioId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], Pacientes.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Pacientes.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Cep", nullable: true, length: 8 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "cep", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "imagem", nullable: true, length: 200 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "imagem", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Situacao", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "situacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Responsavel", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "responsavel", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "CpfResponsavel", nullable: true, length: 15 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "cpfResponsavel", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Mae", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "mae", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Carteirinha", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "carteirinha", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Observacoes", nullable: true, length: 2000 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "observacoes", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Escolaridade", nullable: true }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "escolaridade", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "TipoSanguineo", nullable: true }),
        __metadata("design:type", Number)
    ], Pacientes.prototype, "tipoSanguineo", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Plano", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], Pacientes.prototype, "plano", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AgendasConsultas_1.AgendasConsultas; }, function (agendasConsultas) { return agendasConsultas.paciente; }),
        __metadata("design:type", Array)
    ], Pacientes.prototype, "agendasConsultas", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Convenios_1.Convenios; }, function (convenios) { return convenios.pacientes; }),
        (0, typeorm_1.JoinColumn)([{ name: "ConvenioId", referencedColumnName: "id" }]),
        __metadata("design:type", Convenios_1.Convenios)
    ], Pacientes.prototype, "convenio", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.pacientes; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Pacientes.prototype, "usuarioExclusao", void 0);
    Pacientes = __decorate([
        (0, typeorm_1.Index)("PK_PACIENTES", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Pacientes", { schema: "dbo" })
    ], Pacientes);
    return Pacientes;
}());
exports.Pacientes = Pacientes;
//# sourceMappingURL=Pacientes.js.map