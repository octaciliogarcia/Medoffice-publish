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
exports.PacientesPendencias = void 0;
var typeorm_1 = require("typeorm");
var PacientesPendencias = /** @class */ (function () {
    function PacientesPendencias() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "PacienteId", nullable: true }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "pacienteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProfissionalId", nullable: true }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "profissionalId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataOcorrencia", nullable: true }),
        __metadata("design:type", Date)
    ], PacientesPendencias.prototype, "dataOcorrencia", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Tipo", nullable: true }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "tipo", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Obs", nullable: true, length: 500 }),
        __metadata("design:type", String)
    ], PacientesPendencias.prototype, "obs", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { name: "Valor", nullable: true, precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "valor", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], PacientesPendencias.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], PacientesPendencias.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], PacientesPendencias.prototype, "dataExclusao", void 0);
    PacientesPendencias = __decorate([
        (0, typeorm_1.Index)("PK_PACIENTESPENDENCIAS", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("PacientesPendencias", { schema: "dbo" })
    ], PacientesPendencias);
    return PacientesPendencias;
}());
exports.PacientesPendencias = PacientesPendencias;
//# sourceMappingURL=PacientesPendencias.js.map