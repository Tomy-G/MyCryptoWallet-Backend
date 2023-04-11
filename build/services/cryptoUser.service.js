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
exports.CryptoUserService = void 0;
const cryptoUser_repository_1 = require("../data/repositories/cryptoUser.repository");
class CryptoUserService {
    constructor() {
        this._cryptoUserRepository = new cryptoUser_repository_1.CryptoUserRepository();
    }
    parsePojoIntoDto(cryptoUserPojo) {
        const cryptoDto = {
            userId: cryptoUserPojo.dataValues.userId,
            cryptoId: cryptoUserPojo.dataValues.cryptoId,
            amount: cryptoUserPojo.dataValues.amount
        };
        return cryptoDto;
    }
    parseDtoIntoPojo(cryptoUserDto) {
        // Los pojos no se incicializan como constantes
        return cryptoUserDto;
    }
    addOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            let cryptoUserPojo = this.parseDtoIntoPojo(order);
            const orderPromise = yield this._cryptoUserRepository
                .addOrder(cryptoUserPojo)
                .then((userId) => {
                return userId;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return orderPromise;
        });
    }
    updateOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const cryptoUserPojo = this.parseDtoIntoPojo(order);
            const orderPromise = yield this._cryptoUserRepository
                .updateOrder(cryptoUserPojo)
                .then((userId) => {
                return userId;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return orderPromise;
        });
    }
    getCryptosByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cryptoUserPromise = yield this._cryptoUserRepository
                .getCryptosByUserId(userId)
                .then((cryptoUsersAsPojo) => {
                let cryptoUsersAsDto = [];
                cryptoUsersAsPojo.forEach((cryptoUserAsPojo) => {
                    let cryptoUserAsDto = this.parsePojoIntoDto(cryptoUserAsPojo);
                    cryptoUsersAsDto.push(cryptoUserAsDto);
                });
                return cryptoUsersAsDto;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return cryptoUserPromise;
        });
    }
}
exports.CryptoUserService = CryptoUserService;
