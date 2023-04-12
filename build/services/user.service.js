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
exports.UserService = void 0;
const user_repository_1 = require("../data/repositories/user.repository");
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    //La respuesta va al controlador
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = this.parseDtoIntoPojo(user);
            console.log(userPojo);
            const userPromise = yield this._userRepository
                .addUser(userPojo)
                .then((userId) => {
                return userId;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    parsePojoIntoDto(userPojo) {
        const userDto = {
            userId: userPojo.dataValues.userId,
            username: userPojo.dataValues.username,
            password: userPojo.dataValues.password,
            email: userPojo.dataValues.email,
            fullName: userPojo.dataValues.fullname,
            birthDate: userPojo.dataValues.birthdate,
            deposit: userPojo.dataValues.deposit,
        };
        return userDto;
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository
                .getAllUsers()
                .then((usersAsPojo) => {
                let usersAsDto = [];
                usersAsPojo.forEach((userAsPojo) => {
                    let userAsDto = this.parsePojoIntoDto(userAsPojo);
                    usersAsDto.push(userAsDto);
                });
                //TODO : Llamar al repositorio
                return usersAsDto;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = yield this._userRepository
                .getUserById(id)
                .then((userAsPojo) => {
                if (!!userAsPojo)
                    return this.parsePojoIntoDto(userAsPojo);
                else
                    return undefined;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return userPromise;
        });
    }
    getUserbyUsernameAndPassword(username, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersPromise = yield this._userRepository
                .getUserbyUsernameAndPassword(username, pass)
                .then((userAsPojo) => {
                let userAsDTO = this.parsePojoIntoDto(userAsPojo);
                return userAsDTO;
            })
                .catch((error) => {
                console.error(error);
                throw error;
            });
            return usersPromise;
        });
    }
    parseDtoIntoPojo(userDto) {
        return userDto;
    }
}
exports.UserService = UserService;
