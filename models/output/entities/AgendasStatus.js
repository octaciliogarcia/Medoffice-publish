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
exports.AgendasStatus = void 0;
var typeorm_1 = require("typeorm");
var AgendasStatus = /** @class */ (function () {
    function AgendasStatus() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], AgendasStatus.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Descricao", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], AgendasStatus.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Icone", nullable: true, length: 100 }),
        __metadata("design:type", String)
    ], AgendasStatus.prototype, "icone", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasStatus.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasStatus.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasStatus.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasStatus.prototype, "dataExclusao", void 0);
    AgendasStatus = __decorate([
        (0, typeorm_1.Index)("PK_AGENDASSTATUS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("AgendasStatus", { schema: "dbo" })
    ], AgendasStatus);
    return AgendasStatus;
}());
exports.AgendasStatus = AgendasStatus;
//# sourceMappingURL=AgendasStatus.js.map