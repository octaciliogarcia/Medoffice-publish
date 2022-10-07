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
exports.MedidasPacientePep = void 0;
var typeorm_1 = require("typeorm");
var MedidasPacientePep = /** @class */ (function () {
    function MedidasPacientePep() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], MedidasPacientePep.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProntuarioEletronicoPacienteId", nullable: true }),
        __metadata("design:type", Number)
    ], MedidasPacientePep.prototype, "prontuarioEletronicoPacienteId", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataMedidas", nullable: true }),
        __metadata("design:type", Date)
    ], MedidasPacientePep.prototype, "dataMedidas", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { name: "Peso", nullable: true, precision: 10, scale: 3 }),
        __metadata("design:type", Number)
    ], MedidasPacientePep.prototype, "peso", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Altura", nullable: true }),
        __metadata("design:type", Number)
    ], MedidasPacientePep.prototype, "altura", void 0);
    __decorate([
        (0, typeorm_1.Column)("decimal", { name: "Imc", nullable: true, precision: 5, scale: 1 }),
        __metadata("design:type", Number)
    ], MedidasPacientePep.prototype, "imc", void 0);
    MedidasPacientePep = __decorate([
        (0, typeorm_1.Index)("PK_MedidasPacientePEP", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("MedidasPacientePEP", { schema: "dbo" })
    ], MedidasPacientePep);
    return MedidasPacientePep;
}());
exports.MedidasPacientePep = MedidasPacientePep;
//# sourceMappingURL=MedidasPacientePep.js.map