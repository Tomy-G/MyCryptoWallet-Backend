"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoRepository = void 0;
const crypto_model_1 = require("../models/crypto.model");
const crypto_db_config_1 = require("../config/crypto.db.config");
class CryptoRepository {
    constructor() {
        this._database = {};
        this._database = (0, crypto_db_config_1.connect)();
        this._cryptoRepository = this._database.sequelize.getRepository(crypto_model_1.CryptoPojo);
    }
    getAllCryptos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._cryptoRepository.findAll();
            }
            catch (error) {
                console.error(error);
                return [];
            }
        });
    }
    getCryptoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._cryptoRepository.findByPk(id);
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
}
exports.CryptoRepository = CryptoRepository;
