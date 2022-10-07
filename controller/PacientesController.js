"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientesController = void 0;
var typeorm_1 = require("typeorm");
var Pacientes_1 = require("../entity/Pacientes");
var BaseController_1 = require("./BaseController");
var PacientesController = /** @class */ (function (_super) {
    __extends(PacientesController, _super);
    function PacientesController() {
        var _this = _super.call(this, Pacientes_1.Pacientes) || this;
        _this._paciente = (0, typeorm_1.getRepository)(Pacientes_1.Pacientes);
        return _this;
    }
    PacientesController.prototype.save = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj;
            return __generator(this, function (_a) {
                _obj = request.body;
                _super.prototype.isRequired.call(this, _obj.nome, 'o nome é obrigatório');
                _super.prototype.isRequired.call(this, _obj.cpf, 'o cpf é obrigatório');
                _super.prototype.isRequired.call(this, _obj.rg, 'o rg é obrigatório');
                _super.prototype.isRequired.call(this, _obj.celular, 'o celular é obrigatório');
                _super.prototype.isRequired.call(this, _obj.cep, 'o cep é obrigatório');
                _super.prototype.isRequired.call(this, _obj.endereco, 'o logradouro é obrigatório');
                _super.prototype.isRequired.call(this, _obj.numero, 'o numero é obrigatório');
                // super.isRequired(_obj.bairro, 'o bairro é obrigatório');
                _super.prototype.isRequired.call(this, _obj.cidade, 'a cidade é obrigatória');
                _super.prototype.isRequired.call(this, _obj.uf, 'o uf é obrigatório');
                _super.prototype.isRequired.call(this, _obj.convenio, 'o convenio é obrigatório');
                _super.prototype.isRequired.call(this, _obj.profissionalId, 'o profissional é obrigatório');
                return [2 /*return*/, _super.prototype.save.call(this, _obj, request)];
            });
        });
    };
    PacientesController.prototype.getPacientes = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connection = (0, typeorm_1.getConnection)();
                        sql = "select  convert(varchar, p.PacienteNome) COLLATE SQL_Latin1_General_Cp1251_CS_AS as nome from AgendasConsultas p  where p.ProfissionaisAgendasId =" + request.params.id + " group by p.PacienteNome ";
                        console.log(sql);
                        return [4 /*yield*/, connection.manager.query("select  convert(varchar, p.PacienteNome) COLLATE SQL_Latin1_General_Cp1251_CS_AS as nome from AgendasConsultas p  where p.ProfissionaisAgendasId =" + request.params.id + " group by p.PacienteNome ")];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    PacientesController.prototype.getProfissionalPacientes = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, connection, ret, lista, _i, ret_1, data_1, obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = request.params.data;
                        connection = (0, typeorm_1.getConnection)();
                        return [4 /*yield*/, connection.manager.query("EXECUTE SP_ListarPacientes @ProfissionalId=" + request.params.id + "")];
                    case 1:
                        ret = _a.sent();
                        lista = [];
                        for (_i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
                            data_1 = ret_1[_i];
                            obj = new Pacientes_1.Pacientes();
                            obj.id = data_1.Id;
                            obj.nome = data_1.Nome;
                            obj.cpf = data_1.Cpf;
                            // obj.rg = data.Rg;
                            obj.prontuario = data_1.Prontuario;
                            // obj.indicacao = data.Indicacao;
                            obj.celular = data_1.Celular;
                            obj.fone = data_1.Fone;
                            obj.profissionalId = data_1.ProfissionalId;
                            obj.convenio = data_1.ConvenioId;
                            obj.plano = data_1.Plano;
                            obj.observacoes = data_1.Observacoes;
                            // obj.nomeMae = data.NomeMae;
                            // obj.endereco = data.Endereco;
                            // obj.numero = data.Numero;
                            // obj.complemento = data.Complemento;
                            // obj.bairro = data.Bairro;
                            // obj.cidade = data.Cidade;
                            // obj.uf = data.Uf;
                            // obj.sexo = data.Sexo;
                            // obj.estadoCivil = data.EstadoCivil;
                            // obj.dtNasc = data.DtNasc;
                            // obj.cid = data.Cid;
                            // obj.altura = data.Altura;
                            // obj.peso = data.Peso;
                            // obj.corPele = data.CorPele;
                            // obj.profissao = data.Profissao;
                            // obj.email = data.Email;
                            // obj.usuario = data.UsuarioId;
                            // obj.dataHora = data.DataHora;
                            // obj.dataExclusao = data.DataExclusao;
                            // obj.usuarioExclusao = data.UsuarioExclusao;
                            // obj.cep = data.Cep;
                            // obj.imagem = data.imagem;
                            // obj.situacao = data.Situacao;
                            // obj.responsavel = data.Responsavel;
                            // obj.responsavel = data.Responsavel;
                            // obj.cpfResponsavel = data.CpfResponsavel;
                            // obj.cpfResponsavel = data.CpfResponsavel;
                            // obj.nomeMae = data.Mae;
                            // obj.carteirinha = data.Carteirinha;
                            lista.push(obj);
                        }
                        return [2 /*return*/, lista];
                }
            });
        });
    };
    PacientesController.prototype.getPacienteCadastrado = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._paciente.findOne({
                        where: {
                            profissionalId: request.params.id,
                            cpf: request.params.cpf,
                        }
                    })];
            });
        });
    };
    PacientesController.prototype.getPacienteProntuario = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._paciente.findOne({
                        where: {
                            profissionalId: request.params.profissional,
                            prontuario: request.params.id,
                        }
                    })];
            });
        });
    };
    PacientesController.prototype.getUltimoProntuario = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, ret, _i, ret_2, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connection = (0, typeorm_1.getConnection)();
                        return [4 /*yield*/, connection.manager.query("EXECUTE sp_ultimonrprontuario " + request.params.id + "")];
                    case 1:
                        ret = _a.sent();
                        for (_i = 0, ret_2 = ret; _i < ret_2.length; _i++) {
                            result = ret_2[_i];
                            return [2 /*return*/, {
                                    status: 200,
                                    success: true,
                                    message: result
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return PacientesController;
}(BaseController_1.BaseController));
exports.PacientesController = PacientesController;
//# sourceMappingURL=PacientesController.js.map