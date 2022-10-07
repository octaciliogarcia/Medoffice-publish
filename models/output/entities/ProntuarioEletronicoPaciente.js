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
exports.ProntuarioEletronicoPaciente = void 0;
var typeorm_1 = require("typeorm");
var ProntuarioEletronicoPacienteAnexos_1 = require("./ProntuarioEletronicoPacienteAnexos");
var ProntuarioEletronicoPaciente = /** @class */ (function () {
    function ProntuarioEletronicoPaciente() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPaciente.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "PacienteId" }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPaciente.prototype, "pacienteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataLancamento", nullable: true }),
        __metadata("design:type", Date)
    ], ProntuarioEletronicoPaciente.prototype, "dataLancamento", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProfissionalId", nullable: true }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPaciente.prototype, "profissionalId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "DescritivoAtendimento", nullable: true }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPaciente.prototype, "descritivoAtendimento", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "TempoConsulta", nullable: true, length: 4 }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPaciente.prototype, "tempoConsulta", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ProntuarioEletronicoPacienteAnexos_1.ProntuarioEletronicoPacienteAnexos; }, function (prontuarioEletronicoPacienteAnexos) {
            return prontuarioEletronicoPacienteAnexos.prontuario;
        }),
        __metadata("design:type", Array)
    ], ProntuarioEletronicoPaciente.prototype, "prontuarioEletronicoPacienteAnexos", void 0);
    ProntuarioEletronicoPaciente = __decorate([
        (0, typeorm_1.Index)("PK_ProntuarioEletronicoPaciente", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ProntuarioEletronicoPaciente", { schema: "dbo" })
    ], ProntuarioEletronicoPaciente);
    return ProntuarioEletronicoPaciente;
}());
exports.ProntuarioEletronicoPaciente = ProntuarioEletronicoPaciente;
//# sourceMappingURL=ProntuarioEletronicoPaciente.js.map