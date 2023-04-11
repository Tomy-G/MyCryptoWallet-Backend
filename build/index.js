"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const crypto_routes_1 = __importDefault(require("./routes/crypto.routes"));
const crypto_user_routes_1 = __importDefault(require("./routes/crypto_user.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
app.get('/ping', (_req, res) => {
    res.send('Pong!');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use('/api/users', user_routes_1.default);
app.use('/api/cryptos', crypto_routes_1.default);
app.use('/api/user-crypto', crypto_user_routes_1.default);
