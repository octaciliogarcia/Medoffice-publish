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
exports.UsuariosPermissoes = void 0;
var typeorm_1 = require("typeorm");
var Permissoes_1 = require("./Permissoes");
var Usuarios_1 = require("./Usuarios");
var UsuariosPermissoes = /** @class */ (function () {
    function UsuariosPermissoes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], UsuariosPermissoes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Permissoes_1.Permissoes; }, function (permissoes) { return permissoes.usuariosPermissoes; }),
        (0, typeorm_1.JoinColumn)([{ name: "PermissaoId", referencedColumnName: "id" }]),
        __metadata("design:type", Permissoes_1.Permissoes)
    ], UsuariosPermissoes.prototype, "permissao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.usuariosPermissoes; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], UsuariosPermissoes.prototype, "usuario", void 0);
    UsuariosPermissoes = __decorate([
        (0, typeorm_1.Index)("PK_USUARIOSPERMISSOES", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("UsuariosPermissoes", { schema: "dbo" })
    ], UsuariosPermissoes);
    return UsuariosPermissoes;
}());
exports.UsuariosPermissoes = UsuariosPermissoes;
//# sourceMappingURL=UsuariosPermissoes.js.map