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
exports.ProntuarioEletronicoPacienteAnexos = void 0;
var typeorm_1 = require("typeorm");
var ProntuarioEletronicoPacienteAnexos = /** @class */ (function () {
    function ProntuarioEletronicoPacienteAnexos() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProntuarioId", nullable: true }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "prontuarioId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Anexo", nullable: true, length: 300 }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "anexo", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "TipoAnexo", nullable: true, length: 1 }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "tipoanexo", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Descricao", nullable: true, length: 200 }),
        __metadata("design:type", String)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "descricao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], ProntuarioEletronicoPacienteAnexos.prototype, "usuarioExclusao", void 0);
    ProntuarioEletronicoPacienteAnexos = __decorate([
        (0, typeorm_1.Index)("PK_ProntuarioEletronicoPacienteAnexos", ["id",], { unique: true }),
        (0, typeorm_1.Entity)("ProntuarioEletronicoPacienteAnexos", { schema: "dbo" })
    ], ProntuarioEletronicoPacienteAnexos);
    return ProntuarioEletronicoPacienteAnexos;
}());
exports.ProntuarioEletronicoPacienteAnexos = ProntuarioEletronicoPacienteAnexos;
//# sourceMappingURL=ProntuarioEletronicoPacienteAnexos.js.map