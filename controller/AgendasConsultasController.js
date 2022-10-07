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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendaConsultasController = void 0;
var typeorm_1 = require("typeorm");
var AgendasConsultas_1 = require("../entity/AgendasConsultas");
var Usuarios_1 = require("../entity/Usuarios");
var BaseController_1 = require("./BaseController");
var moment = require("moment");
var ProfissionaisAgendas_1 = require("../entity/ProfissionaisAgendas");
var AgendaConsultasController = /** @class */ (function (_super) {
    __extends(AgendaConsultasController, _super);
    function AgendaConsultasController() {
        var _this = _super.call(this, AgendasConsultas_1.AgendasConsultas) || this;
        _this._usuario2 = (0, typeorm_1.getRepository)(Usuarios_1.Usuarios);
        _this._agenda = (0, typeorm_1.getRepository)(AgendasConsultas_1.AgendasConsultas);
        _this._profissionalagenda = (0, typeorm_1.getRepository)(ProfissionaisAgendas_1.ProfissionaisAgendas);
        return _this;
    }
    AgendaConsultasController.prototype.save = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj, id, Verifica, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _obj = request.body;
                        _super.prototype.isRequired.call(this, _obj.pacienteNome, 'a nome do paciente é obrigatório');
                        _super.prototype.isRequired.call(this, _obj.profissionaisAgendas, 'o nome do profissional é obrigatório');
                        _super.prototype.isRequired.call(this, _obj.tipoAtendimento, 'o tipo de atendimento é obrigatório');
                        _super.prototype.isRequired.call(this, _obj.hora, 'a hora do atendimento é obrigatório');
                        _super.prototype.isRequired.call(this, _obj.dataAgenda, 'a data do atendimento é obrigatório');
                        _super.prototype.isRequired.call(this, _obj.foneContato, 'o telefone é obrigatório');
                        id = 0;
                        if (_obj.usuarioAgendamento) {
                            id = _obj.usuarioAgendamento.id;
                        }
                        else {
                            id = this.numeros(request.headers['x-user-include']);
                        }
                        return [4 /*yield*/, this._agenda.findOne({
                                where: {
                                    dataExclusao: (0, typeorm_1.IsNull)(),
                                    dataAgenda: moment(_obj.dataAgenda).format("YYYY-MM-DD"),
                                    profissionaisAgendas: _obj.profissionaisAgendas,
                                    hora: _obj.hora
                                }
                            })];
                    case 1:
                        Verifica = _a.sent();
                        if (Verifica && !_obj.id) {
                            return [2 /*return*/, {
                                    status: 200,
                                    success: true,
                                    message: {
                                        agendado: true
                                    }
                                }];
                        }
                        if (!!_obj.id) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._usuario2.findOne(id)];
                    case 2:
                        user = _a.sent();
                        _obj.usuarioAgendamento = user;
                        _a.label = 3;
                    case 3: return [2 /*return*/, _super.prototype.save.call(this, _obj, request)];
                }
            });
        });
    };
    AgendaConsultasController.prototype.enviaragendamento = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: request.body.id,
                            }
                        })];
                    case 1:
                        _obj = _a.sent();
                        if (_obj) {
                            _obj.confirmacaoenviadaem = new Date();
                        }
                        return [2 /*return*/, _super.prototype.save.call(this, _obj, request)];
                }
            });
        });
    };
    AgendaConsultasController.prototype.confirmaragendamento = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _obj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                id: request.body.id,
                            }
                        })];
                    case 1:
                        _obj = _a.sent();
                        if (request.body.tipo == "recusou") {
                            _obj.confirmacaorecebidaem = null;
                            _obj.faseAtendimento = 1;
                        }
                        else {
                            _obj.confirmacaorecebidaem = new Date();
                            _obj.faseAtendimento = 14;
                        }
                        return [2 /*return*/, _super.prototype.save.call(this, _obj, request)];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getProfissionalAgendas = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var profissional, data, connection, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profissional = request.params.profissional;
                        data = request.params.data;
                        connection = (0, typeorm_1.getConnection)();
                        return [4 /*yield*/, connection.manager.query("EXECUTE sp_listaragendaconsultastatus @ProfissionalAgendaId=" + profissional + ", @DataSolicitada='" + data + "'")];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getProfissionalAgendasSemanal = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var profissional, datasolicitada, connection, sql, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profissional = request.params.id;
                        datasolicitada = request.params.datasolicitada;
                        connection = (0, typeorm_1.getConnection)();
                        sql = "EXECUTE SP_LISTARAGENDACONSULTASTATUS7DIAS @ProfissionalAgendaId=" + profissional + ", @DataSolicitada='" + datasolicitada + "'";
                        return [4 /*yield*/, connection.manager.query(sql)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getProfissionalAgendaPacientesAtendidos = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var profissional, datasolicitada, connection, sql, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        profissional = request.params.profissionalagenda;
                        datasolicitada = request.params.dataagenda;
                        connection = (0, typeorm_1.getConnection)();
                        sql = "EXECUTE SP_NRAGENDAMENTOS " + profissional + ",'" + datasolicitada + "'";
                        return [4 /*yield*/, connection.manager.query(sql)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getAgendas = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var usuario, connection, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = request.params.id;
                        connection = (0, typeorm_1.getConnection)();
                        return [4 /*yield*/, connection.manager.query('select pa.NomeAgenda as nome, p.cpf as cpf, p.registroProfissional as registroProfissional, p.id as idprof, ua.AgendaConsultaId as id, pa.PossuiAgendaAplicacao as possuiAgendaAplicacao, pa.TipoAgenda as tipoAgenda,p.ModeloAgendaConsulta as modeloAgendaConsulta  from Profissionais p join ProfissionaisAgendas pa on pa.ProfissionalId = p.Id join UsuariosAgendas ua on ua.AgendaConsultaId = pa.Id join Usuarios u on u.Id = ua.Usuario where  ua.DataExclusao is null and p.DataExclusao is null and pa.DataExclusao is null and u.Id = ' + usuario)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AgendaConsultasController.prototype.GetVinculos = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.repository.find({
                        where: {
                            vinculo: request.params.id,
                        }
                    })];
            });
        });
    };
    AgendaConsultasController.prototype.getconsultas = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, profissionalagenda, connection, agenda, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = moment(new Date()).format("YYYY-MM-DD");
                        profissionalagenda = request.params.profissionalagenda;
                        connection = (0, typeorm_1.getConnection)();
                        return [4 /*yield*/, this._profissionalagenda.findOne(profissionalagenda)];
                    case 1:
                        agenda = _a.sent();
                        return [4 /*yield*/, connection.manager.query("select DataAgenda as dataAgenda, Hora as hora,PacienteNome as pacienteNome,FaseAtendimento as faseAtendimento,TipoAtendimento as tipoatendimento,Observacao as observacao from AgendasConsultas a where a.ProfissionaisAgendasId = " + agenda.id + " and PacienteNome like'%" + request.params.id + "%' and DataExclusao is null order by dataAgenda desc")];
                    case 2:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getconsultasPaciente = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var data, profissionalagenda, agenda;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = moment(new Date()).format("YYYY-MM-DD");
                        profissionalagenda = request.params.profissionalagenda;
                        return [4 /*yield*/, this._profissionalagenda.findOne(profissionalagenda)];
                    case 1:
                        agenda = _a.sent();
                        return [2 /*return*/, this._agenda.find({
                                where: {
                                    // profissionaisAgendas: agenda,
                                    paciente: request.params.paciente,
                                    // pacienteNome: Like(`%${nome}%`),
                                    // dataAgenda: MoreThanOrEqual(data),
                                    dataExclusao: (0, typeorm_1.IsNull)()
                                }, order: {
                                    dataAgenda: 'DESC',
                                    hora: 'DESC'
                                }
                            })
                            //return nome;
                        ];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getconsultasTrintaDias = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var dataagenda, data, profissionalagenda, agenda, connection, sql, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataagenda = request.params.data;
                        data = moment(new Date(dataagenda)).add('days', -30).format("YYYY-MM-DD");
                        profissionalagenda = request.params.profissionalagenda;
                        return [4 /*yield*/, this._profissionalagenda.findOne(profissionalagenda)];
                    case 1:
                        agenda = _a.sent();
                        connection = (0, typeorm_1.getConnection)();
                        sql = "select * from AgendasConsultas a where a.ProfissionaisAgendasId = " + profissionalagenda + " and PacienteId = " + request.params.id + " and DataExclusao is null and DataAgenda >= '" + data + "' and DataAgenda <'" + dataagenda + "'";
                        return [4 /*yield*/, connection.manager.query(sql)];
                    case 2:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    AgendaConsultasController.prototype.getDisponibilidade = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, profissional, inicio, termino, list, datas, _i, datas_1, data, databuscar, ret, _a, ret_1, result, agenda;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        connection = (0, typeorm_1.getConnection)();
                        profissional = request.params.profissionalagenda;
                        inicio = new Date(moment(request.params.inicio, "YYYY-MM-DD").format("YYYYY-MM-DD"));
                        termino = new Date(moment(request.params.termino, "YYYY-MM-DD").format("YYYY-MM-DD"));
                        list = new Array();
                        datas = this.pegardias(inicio, termino);
                        _i = 0, datas_1 = datas;
                        _b.label = 1;
                    case 1:
                        if (!(_i < datas_1.length)) return [3 /*break*/, 7];
                        data = datas_1[_i];
                        databuscar = moment(data, "YYYY-MM-DD").format("YYYY-MM-DD");
                        return [4 /*yield*/, connection.manager.query("EXECUTE sp_listaragendaconsulta @ProfissionalAgendaId=" + profissional + ", @DataSolicitada='" + databuscar + "'")];
                    case 2:
                        ret = _b.sent();
                        _a = 0, ret_1 = ret;
                        _b.label = 3;
                    case 3:
                        if (!(_a < ret_1.length)) return [3 /*break*/, 6];
                        result = ret_1[_a];
                        if (!(result.id == 0)) return [3 /*break*/, 5];
                        agenda = ({ data: result.DataAgenda, hora: result.Hora });
                        return [4 /*yield*/, list.push(agenda)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _a++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [4 /*yield*/, list];
                    case 8: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    AgendaConsultasController.prototype.removeSenha = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var model, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne(request.params.id)];
                    case 1:
                        model = _a.sent();
                        if (!model) return [3 /*break*/, 3];
                        model.dataExclusao = new Date();
                        return [4 /*yield*/, this._usuario2.findOne(request.params.usuario)];
                    case 2:
                        user = _a.sent();
                        model.usuarioExclusao = user;
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.repository.save(model)];
                }
            });
        });
    };
    AgendaConsultasController.prototype.pegardias = function (startDate, endDate) {
        var dates = [];
        var theDate = new Date(startDate);
        while (theDate <= endDate) {
            dates = __spreadArray(__spreadArray([], dates, true), [new Date(theDate)], false);
            theDate.setDate(theDate.getDate() + 1);
        }
        return dates;
    };
    return AgendaConsultasController;
}(BaseController_1.BaseController));
exports.AgendaConsultasController = AgendaConsultasController;
//# sourceMappingURL=AgendasConsultasController.js.map