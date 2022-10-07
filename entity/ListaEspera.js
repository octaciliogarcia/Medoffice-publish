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
exports.ListaEspera = void 0;
var typeorm_1 = require("typeorm");
var Pacientes_1 = require("./Pacientes");
var ListaEspera = /** @class */ (function () {
    function ListaEspera() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "Id" }),
        __metadata("design:type", Number)
    ], ListaEspera.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ProfissionalAgendaId", nullable: true }),
        __metadata("design:type", Number)
    ], ListaEspera.prototype, "profissionalAgendaId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Paciente", nullable: true, length: 60 }),
        __metadata("design:type", String)
    ], ListaEspera.prototype, "paciente", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "ConvenioId", nullable: true }),
        __metadata("design:type", Number)
    ], ListaEspera.prototype, "convenioId", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Email", nullable: true, length: 80 }),
        __metadata("design:type", String)
    ], ListaEspera.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Celular", nullable: true, length: 20 }),
        __metadata("design:type", String)
    ], ListaEspera.prototype, "celular", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", { name: "Observacao", nullable: true, length: 1000 }),
        __metadata("design:type", String)
    ], ListaEspera.prototype, "observacao", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "Usuario", nullable: true }),
        __metadata("design:type", Number)
    ], ListaEspera.prototype, "usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataHora", nullable: true }),
        __metadata("design:type", Date)
    ], ListaEspera.prototype, "dataHora", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", { name: "UsuarioExclusao", nullable: true }),
        __metadata("design:type", Number)
    ], ListaEspera.prototype, "usuarioExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataExclusao", nullable: true }),
        __metadata("design:type", Date)
    ], ListaEspera.prototype, "dataExclusao", void 0);
    __decorate([
        (0, typeorm_1.Column)("smalldatetime", { name: "DataAgendamento", nullable: true }),
        __metadata("design:type", Date)
    ], ListaEspera.prototype, "dataAgendamento", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Pacientes_1.Pacientes; }, function (pacientes) { return pacientes.agendasConsultas; }, { eager: true }),
        (0, typeorm_1.JoinColumn)([{ name: "PacienteId", referencedColumnName: "id" }]),
        __metadata("design:type", Pacientes_1.Pacientes)
    ], ListaEspera.prototype, "pacienteid", void 0);
    ListaEspera = __decorate([
        (0, typeorm_1.Index)("PK_ListaEspera", ["id"], { unique: true }),
        (0, typeorm_1.Entity)("ListaEspera", { schema: "dbo" })
    ], ListaEspera);
    return ListaEspera;
}());
exports.ListaEspera = ListaEspera;
//# sourceMappingURL=ListaEspera.js.map