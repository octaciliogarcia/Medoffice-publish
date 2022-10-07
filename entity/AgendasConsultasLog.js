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
exports.AgendasConsultasLog = void 0;
var typeorm_1 = require("typeorm");
var AgendasConsultasLog = /** @class */ (function () {
    function AgendasConsultasLog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], AgendasConsultasLog.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "AgendasConsultasId", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultasLog.prototype, "agendasConsultasId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], AgendasConsultasLog.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], AgendasConsultasLog.prototype, "dataHora", void 0);
    AgendasConsultasLog = __decorate([
        (0, typeorm_1.Index)("PK_AGENDASCONSULTASLOG", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("AgendasConsultasLog", { schema: "dbo" })
    ], AgendasConsultasLog);
    return AgendasConsultasLog;
}());
exports.AgendasConsultasLog = AgendasConsultasLog;
//# sourceMappingURL=AgendasConsultasLog.js.map