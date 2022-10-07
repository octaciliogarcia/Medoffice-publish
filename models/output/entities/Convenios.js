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
exports.Convenios = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var Pacientes_1 = require("./Pacientes");
var ProfissionaisConvenios_1 = require("./ProfissionaisConvenios");
var Convenios = /** @class */ (function () {
    function Convenios() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Convenios.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", length: 60 }),
        __metadata("design:type", String)
    ], Convenios.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Contato", nullable: true, length: 40 }),
        __metadata("design:type", String)
    ], Convenios.prototype, "contato", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Fone", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Convenios.prototype, "fone", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Celular", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], Convenios.prototype, "celular", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Status", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Convenios.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], Convenios.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Convenios.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.convenios; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Convenios.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.convenios2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], Convenios.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Pacientes_1.Pacientes; }, function (pacientes) { return pacientes.convenio; }),
        __metadata("design:type", Array)
    ], Convenios.prototype, "pacientes", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProfissionaisConvenios_1.ProfissionaisConvenios; }, function (profissionaisConvenios) { return profissionaisConvenios.convenio; }),
        __metadata("design:type", Array)
    ], Convenios.prototype, "profissionaisConvenios", void 0);
    Convenios = __decorate([
        (0, typeorm_1.Index)("PK_CONVENIOS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Convenios", { schema: "dbo" })
    ], Convenios);
    return Convenios;
}());
exports.Convenios = Convenios;
//# sourceMappingURL=Convenios.js.map