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
exports.Permissoes = void 0;
var typeorm_1 = require("typeorm");
var UsuariosPermissoes_1 = require("./UsuariosPermissoes");
var Permissoes = /** @class */ (function () {
    function Permissoes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], Permissoes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], Permissoes.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Status", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], Permissoes.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], Permissoes.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioId", nullable: true }),
        __metadata("design:type", Number)
    ], Permissoes.prototype, "usuarioId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], Permissoes.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], Permissoes.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return UsuariosPermissoes_1.UsuariosPermissoes; }, function (usuariosPermissoes) { return usuariosPermissoes.permissao; }),
        __metadata("design:type", Array)
    ], Permissoes.prototype, "usuariosPermissoes", void 0);
    Permissoes = __decorate([
        (0, typeorm_1.Index)("PK_PERMISSOES", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("Permissoes", { schema: "dbo" })
    ], Permissoes);
    return Permissoes;
}());
exports.Permissoes = Permissoes;
//# sourceMappingURL=Permissoes.js.map