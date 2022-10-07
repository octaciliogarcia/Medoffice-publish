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
exports.AgendasCoresStatus = void 0;
var typeorm_1 = require("typeorm");
var AgendasCoresStatus = /** @class */ (function () {
    function AgendasCoresStatus() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], AgendasCoresStatus.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "AgendaConsultaId", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresStatus.prototype, "agendaConsultaId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "CodigoStatus", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresStatus.prototype, "codigoStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "BackColor", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], AgendasCoresStatus.prototype, "backColor", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresStatus.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasCoresStatus.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasCoresStatus.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasCoresStatus.prototype, "dataExclusao", void 0);
    AgendasCoresStatus = __decorate([
        (0, typeorm_1.Index)("PK_AGENDASCORESSTATUS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("AgendasCoresStatus", { schema: "dbo" })
    ], AgendasCoresStatus);
    return AgendasCoresStatus;
}());
exports.AgendasCoresStatus = AgendasCoresStatus;
//# sourceMappingURL=AgendasCoresStatus.js.map