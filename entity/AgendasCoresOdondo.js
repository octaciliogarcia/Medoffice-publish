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
exports.AgendasCoresOdondo = void 0;
var typeorm_1 = require("typeorm");
var AgendasCoresOdondo = /** @class */ (function () {
    function AgendasCoresOdondo() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], AgendasCoresOdondo.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "AgendaConsultaId", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresOdondo.prototype, "agendaConsultaId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProcedimentoOdontoId", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresOdondo.prototype, "procedimentoOdontoId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "BackColor", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], AgendasCoresOdondo.prototype, "backColor", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresOdondo.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasCoresOdondo.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresOdondo.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasCoresOdondo.prototype, "dataExclusao", void 0);
    AgendasCoresOdondo = __decorate([
        (0, typeorm_1.Index)("PK_AgendasCoresOdonto", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("AgendasCoresOdondo", { schema: "dbo" })
    ], AgendasCoresOdondo);
    return AgendasCoresOdondo;
}());
exports.AgendasCoresOdondo = AgendasCoresOdondo;
//# sourceMappingURL=AgendasCoresOdondo.js.map