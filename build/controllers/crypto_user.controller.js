"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoUserController = void 0;
const cryptoUser_service_1 = require("../services/cryptoUser.service");
const cryptoUserService = new cryptoUser_service_1.CryptoUserService();
exports.cryptoUserController = {
    getCryptosByUserId: (req, res) => {
        try {
            const userId = req.params.id;
            cryptoUserService.getCryptosByUserId(userId).then((result) => {
                (result != null) ? res.json(result) : res.sendStatus(404);
            });
        }
        catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    addOrder: (req, res) => {
        try {
            //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
            const newOrder = req.body;
            //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
            cryptoUserService.addOrder(newOrder).then((result) => {
                console.log(result);
                res.json(result);
            });
        }
        catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    updateOrder: (req, res) => {
        try {
            //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
            const newOrder = req.body;
            //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
            cryptoUserService.updateOrder(newOrder).then((result) => {
                console.log(result);
                res.json(result);
            });
        }
        catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    }
};
