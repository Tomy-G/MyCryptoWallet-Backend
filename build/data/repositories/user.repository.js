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
exports.UserRepository = void 0;
const user_model_1 = require("../models/user.model");
const user_db_config_1 = require("../config/user.db.config");
class UserRepository {
    constructor() {
        this._database = {};
        this._database = (0, user_db_config_1.connect)();
        this._userRepository = this._database.sequelize.getRepository(user_model_1.UserPojo);
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                newUser = yield this._userRepository.create(newUser);
                return newUser.userId;
            }
            catch (error) {
                console.error(error);
                return "-1";
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findAll();
            }
            catch (error) {
                console.error(error);
                return [];
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._userRepository.findByPk(id);
            }
            catch (error) {
                console.error(error);
                return undefined;
            }
        });
    }
    getUserbyUsernameAndPassword(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this._userRepository.findOne({
                    where: {
                        username: username,
                        password: password
                    }
                });
                console.log("user:::", user);
                return user;
            }
            catch (error) {
                console.error(error);
                return error;
            }
        });
    }
}
exports.UserRepository = UserRepository;
