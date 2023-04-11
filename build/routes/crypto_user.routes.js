"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_user_controller_1 = require("../controllers/crypto_user.controller");
const router = express_1.default.Router();
router.post('/add', crypto_user_controller_1.cryptoUserController.addOrder);
router.get('/get/:id', crypto_user_controller_1.cryptoUserController.getCryptosByUserId);
router.put('/update', crypto_user_controller_1.cryptoUserController.updateOrder);
exports.default = router;
