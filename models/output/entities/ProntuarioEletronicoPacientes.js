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
exports.ProntuarioEletronicoPacientes = void 0;
var typeorm_1 = require("typeorm");
var ProntuarioEletronicoPacientes = /** @class */ (function () {
    function ProntuarioEletronicoPacientes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacientes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "PacienteId" }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacientes.prototype, "pacienteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("datetime", { name: "DataLancamento", nullable: true }),
        __metadata("design:type", Date)
    ], ProntuarioEletronicoPacientes.prototype, "dataLancamento", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProfissionalId", nullable: true }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacientes.prototype, "profissionalId", void 0);
    __decorate([
        (0, typeorm_1.Column)("nvarchar", { name: "DescritivoAtendimento", nullable: true }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPacientes.prototype, "descritivoAtendimento", void 0);
    __decorate([
        (0, typeorm_1.Column)("nvarchar", { name: "TempoConsulta", nullable: true }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPacientes.prototype, "tempoConsulta", void 0);
    ProntuarioEletronicoPacientes = __decorate([
        (0, typeorm_1.Entity)("ProntuarioEletronicoPacientes", { schema: "dbo" })
    ], ProntuarioEletronicoPacientes);
    return ProntuarioEletronicoPacientes;
}());
exports.ProntuarioEletronicoPacientes = ProntuarioEletronicoPacientes;
//# sourceMappingURL=ProntuarioEletronicoPacientes.js.map