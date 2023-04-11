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
exports.CryptoUserRepository = void 0;
const crypto_user_model_1 = require("../models/crypto_user.model");
const cryptoUser_db_config_1 = require("../config/cryptoUser.db.config");
class CryptoUserRepository {
    constructor() {
        this._database = {};
        this._database = (0, cryptoUser_db_config_1.connect)();
        this._cryptoUserRepository =
            this._database.sequelize.getRepository(crypto_user_model_1.CryptoUserPojo);
    }
    getCryptosByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._cryptoUserRepository.findAll({
                    where: {
                        user_id: userId,
                        //password: 'passwordDeUsuario'
                    },
                });
            }
            catch (error) {
                console.error(error);
                return [];
            }
        });
    }
    getCryptoUser(userId, cryptoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._cryptoUserRepository.findOne({
                    where: {
                        user_id: userId,
                        crypto_id: cryptoId,
                    },
                });
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
    addOrder(newCryptoUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield this._cryptoUserRepository.create(newCryptoUser);
                return user.userId;
            }
            catch (error) {
                console.error(error);
                return error.toString();
            }
        });
    }
    updateOrder(newCryptoUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updated = yield this._cryptoUserRepository.update(newCryptoUser, {
                    where: {
                        user_id: newCryptoUser.userId,
                        crypto_id: newCryptoUser.cryptoId,
                    },
                });
                return newCryptoUser.userId;
            }
            catch (error) {
                console.error(error);
                return error.toString();
            }
        });
    }
}
exports.CryptoUserRepository = CryptoUserRepository;
