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
exports.ConselhosRegionais = void 0;
var typeorm_1 = require("typeorm");
var Usuarios_1 = require("./Usuarios");
var ConselhosRegionais = /** @class */ (function () {
    function ConselhosRegionais() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ConselhosRegionais.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Nome", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], ConselhosRegionais.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Sigla", nullable: true, length: 30 }),
        __metadata("design:type", String)
    ], ConselhosRegionais.prototype, "sigla", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ConselhosRegionais.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ConselhosRegionais.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.conselhosRegionais; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioId", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ConselhosRegionais.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Usuarios_1.Usuarios; }, function (usuarios) { return usuarios.conselhosRegionais2; }),
        (0, typeorm_1.JoinColumn)([{ name: "UsuarioExclusao", referencedColumnName: "id" }]),
        __metadata("design:type", Usuarios_1.Usuarios)
    ], ConselhosRegionais.prototype, "usuarioExclusao", void 0);
    ConselhosRegionais = __decorate([
        (0, typeorm_1.Index)("PK_ConselhosRegionais", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ConselhosRegionais", { schema: "dbo" })
    ], ConselhosRegionais);
    return ConselhosRegionais;
}());
exports.ConselhosRegionais = ConselhosRegionais;
//# sourceMappingURL=ConselhosRegionais.js.map