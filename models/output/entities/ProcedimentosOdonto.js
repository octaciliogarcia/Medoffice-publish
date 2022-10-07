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
exports.ProcedimentosOdonto = void 0;
var typeorm_1 = require("typeorm");
var ProcedimentosOdonto = /** @class */ (function () {
    function ProcedimentosOdonto() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProcedimentosOdonto.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Descricao", nullable: true, length: 200 }),
        __metadata("design:type", String)
    ], ProcedimentosOdonto.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "TempoPadrao", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdonto.prototype, "tempoPadrao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Situacao", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], ProcedimentosOdonto.prototype, "situacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdonto.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ProcedimentosOdonto.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdonto.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ProcedimentosOdonto.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Codigo", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], ProcedimentosOdonto.prototype, "codigo", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Cor", nullable: true, length: 16 }),
        __metadata("design:type", String)
    ], ProcedimentosOdonto.prototype, "cor", void 0);
    ProcedimentosOdonto = __decorate([
        (0, typeorm_1.Index)("PK_ProcedimentosOdonto", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ProcedimentosOdonto", { schema: "dbo" })
    ], ProcedimentosOdonto);
    return ProcedimentosOdonto;
}());
exports.ProcedimentosOdonto = ProcedimentosOdonto;
//# sourceMappingURL=ProcedimentosOdonto.js.map