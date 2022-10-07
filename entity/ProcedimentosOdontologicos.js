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
exports.ProcedimentosOdontologico = void 0;
var typeorm_1 = require("typeorm");
var ProcedimentosOdontologico = /** @class */ (function () {
    function ProcedimentosOdontologico() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProcedimentosOdontologico.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Codigo", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdontologico.prototype, "codigo", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "EmpresaId", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdontologico.prototype, "empresaId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Descricao", nullable: true, length: 200 }),
        __metadata("design:type", String)
    ], ProcedimentosOdontologico.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)("char", { name: "Situacao", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], ProcedimentosOdontologico.prototype, "situacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Abrev", nullable: true, length: 5 }),
        __metadata("design:type", String)
    ], ProcedimentosOdontologico.prototype, "abrev", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "TempoPadraoAgenda", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdontologico.prototype, "tempoPadraoAgenda", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdontologico.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ProcedimentosOdontologico.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], ProcedimentosOdontologico.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ProcedimentosOdontologico.prototype, "dataExclusao", void 0);
    ProcedimentosOdontologico = __decorate([
        (0, typeorm_1.Index)("ProcedimentosOdontologicos", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ProcedimentosOdontologicos", { schema: "dbo" })
    ], ProcedimentosOdontologico);
    return ProcedimentosOdontologico;
}());
exports.ProcedimentosOdontologico = ProcedimentosOdontologico;
//# sourceMappingURL=ProcedimentosOdontologicos.js.map