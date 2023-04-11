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
exports.CryptoPojo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let CryptoPojo = class CryptoPojo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.STRING,
        field: 'crypto_id'
    }),
    __metadata("design:type", String)
], CryptoPojo.prototype, "cryptoId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'cryptoname'
    }),
    __metadata("design:type", String)
], CryptoPojo.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.NUMBER,
        field: 'value'
    }),
    __metadata("design:type", Number)
], CryptoPojo.prototype, "value", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'icon'
    }),
    __metadata("design:type", String)
], CryptoPojo.prototype, "icon", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        field: 'asset'
    }),
    __metadata("design:type", String)
], CryptoPojo.prototype, "asset", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.NUMBER,
        field: 'stock'
    }),
    __metadata("design:type", Number)
], CryptoPojo.prototype, "stock", void 0);
CryptoPojo = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        schema: 'crypto',
        tableName: "cryptocurrency",
        createdAt: false,
        updatedAt: false
    })
], CryptoPojo);
exports.CryptoPojo = CryptoPojo;
