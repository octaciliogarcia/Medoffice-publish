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
exports.UsuariosEmpresas = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var Empresas_1 = require("./Empresas");
var UsuariosEmpresas = /** @class */ (function () {
    function UsuariosEmpresas() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], UsuariosEmpresas.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], UsuariosEmpresas.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], UsuariosEmpresas.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.usuariosEmpresas; }),
        (0, typeorm_1.JoinColumn)([{ name: "Usuario", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], UsuariosEmpresas.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Empresas_1.Empresas; }, function (empresas) { return empresas.usuariosEmpresas; }),
        (0, typeorm_1.JoinColumn)([{ name: "EmpresaId", referencedColumnName: "id" }]),
        __metadata("design:type", Empresas_1.Empresas)
    ], UsuariosEmpresas.prototype, "empresa", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.usuariosEmpresas2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], UsuariosEmpresas.prototype, "usuario2", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.usuariosEmpresas3; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], UsuariosEmpresas.prototype, "usuarioExclusao", void 0);
    UsuariosEmpresas = __decorate([
        (0, typeorm_1.Index)("PK_USUARIOSEMPRESAS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("UsuariosEmpresas", { schema: "dbo" })
    ], UsuariosEmpresas);
    return UsuariosEmpresas;
}());
exports.UsuariosEmpresas = UsuariosEmpresas;
//# sourceMappingURL=UsuariosEmpresas.js.map