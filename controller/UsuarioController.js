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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.UsuarioController = void 0;
var BaseController_1 = require("./BaseController");
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../configuration/config");
var md5 = require("md5");
var Usuarios_1 = require("../entity/Usuarios");
var nodemailer = require("nodemailer");
var crypto = require('crypto');
var UsuarioController = /** @class */ (function (_super) {
    __extends(UsuarioController, _super);
    function UsuarioController() {
        return _super.call(this, Usuarios_1.Usuarios) || this;
    }
    UsuarioController.prototype.auth = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, senha, user, _payload;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, email = _a.email, senha = _a.senha;
                        if (!email || !senha)
                            return [2 /*return*/, { status: 400, message: 'Informe o email e a senha para efetuar o login' }];
                        return [4 /*yield*/, this.repository.findOne({ email: email.trim(), senha: md5(senha.trim()) })];
                    case 1:
                        user = _b.sent();
                        // let user = await this.repository.findOne({ email: email, senha: senha });
                        if (user) {
                            _payload = {
                                id: user.id,
                                nome: user.nome,
                                email: user.email,
                                perfil: user.perfil,
                                aplicacao: user.aplicacao
                            };
                            return [2 /*return*/, {
                                    status: 200,
                                    message: {
                                        user: _payload,
                                        token: (0, jsonwebtoken_1.sign)(__assign(__assign({}, _payload), { tm: new Date().getTime() }), config_1.default.secretyKey)
                                    }
                                }];
                        }
                        else {
                            return [2 /*return*/, { status: 404, message: 'E-mail ou senha Inválidos' }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.CriarUsuario = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, nome, email, celular, status, aceiteTermos, senha, confirmaSenha, perfil, aplicacao, user, _user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, nome = _a.nome, email = _a.email, celular = _a.celular, status = _a.status, aceiteTermos = _a.aceiteTermos, senha = _a.senha, confirmaSenha = _a.confirmaSenha, perfil = _a.perfil, aplicacao = _a.aplicacao;
                        _super.prototype.isRequired.call(this, nome, 'O nome do usuário é obrigatório');
                        // super.isRequired(email, 'A foto do usuário é obrigatório');
                        _super.prototype.isRequired.call(this, email, 'o login do usuário é obrigatória');
                        _super.prototype.isRequired.call(this, celular, 'o celular do usuário é obrigatória');
                        _super.prototype.isRequired.call(this, perfil, 'o perfil do usuário é obrigatório');
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.repository.findOne({ id: id })];
                    case 1:
                        user = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.repository.findOne({ email: email })];
                    case 3:
                        user = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!user) {
                            _super.prototype.isRequired.call(this, senha, 'A senha do usuário é obrigatória');
                            _super.prototype.isRequired.call(this, confirmaSenha, 'confirma senha é obrigatório');
                            _super.prototype.isTrue.call(this, senha != confirmaSenha, 'senha e confirma senha deve ser iguais');
                        }
                        if (user && !user.id)
                            _super.prototype.isTrue.call(this, user.email == email, 'usuário já cadastrado');
                        if (user && user.id) {
                            user.nome = nome;
                            user.email = email;
                            user.celular = celular;
                            user.situacao = status;
                            user.perfil = perfil;
                            user.aplicacao = aplicacao;
                            if (senha) {
                                user.senha = md5(senha);
                            }
                            else {
                                user.senha = user.senha;
                            }
                            return [2 /*return*/, _super.prototype.save.call(this, user, request)];
                        }
                        else {
                            _user = new Usuarios_1.Usuarios();
                            _user.nome = nome;
                            _user.email = email;
                            _user.celular = celular;
                            _user.senha = senha;
                            _user.situacao = status;
                            _user.perfil = perfil;
                            _user.aplicacao = aplicacao;
                            _user.aceiteTermos = aceiteTermos;
                            _user.senha = md5(senha);
                            return [2 /*return*/, _super.prototype.save.call(this, _user, request)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return UsuarioController;
}(BaseController_1.BaseController));
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=UsuarioController.js.map