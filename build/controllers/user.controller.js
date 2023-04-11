"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
exports.userController = {
    addUser: (req, res) => {
        try {
            //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
            const newUser = req.body;
            console.log("EL CUERPO ES" + req.body);
            //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
            userService.addUser(newUser).then((result) => {
                console.log(result);
                res.json(result);
            });
        }
        catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
    getAllUsers: (_req, res) => {
        userService
            .getAllUsers()
            .then((result) => {
            res.json(result);
        })
            .catch((excepion) => {
            console.error(excepion);
            res.sendStatus(500);
        });
    },
    getUserById: (req, res) => {
        try {
            const userId = +req.params.id; // El más delante siginifica que TypeScript fuerza al id ser un numero
            userService.getUserById(userId).then((result) => {
                (result != null) ? res.json(result) : res.sendStatus(404);
            });
        }
        catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
};
//PUT Y POST VAN CON BODY Y GET CON PARAMS
