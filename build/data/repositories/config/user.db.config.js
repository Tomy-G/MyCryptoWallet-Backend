"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const connect = () => {
    const DB_HOSTNAME = 'localhost';
    const DB_PORT = 5432;
    const DB_NAME = 'postgres';
    const DB_USERNAME = 'tomy';
    const DB_PASSWORD = 'admin';
    const DB_SCHEMA = 'crypto';
    const DB_DIALECT = 'postgres';
    const dbConfig = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
        host: DB_HOSTNAME,
        dialect: DB_DIALECT,
        schema: DB_SCHEMA,
        port: DB_PORT,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    dbConfig.addModels([user_model_1.UserPojo]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = dbConfig;
    return db;
};
exports.connect = connect;
