import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from "./routes/user.routes";
import cryptoRouter from "./routes/crypto.routes";
import usercryptoRouter from "./routes/crypto_user.routes"
import cors from 'cors'

dotenv.config();

const app: Express = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:4200']

const options: cors.CorsOptions = {origin: allowedOrigins

}

app.use(cors(options))
const port = process.env.PORT;

app.get('/ping', (_req: Request, res: Response) => {
  res.send('Pong!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use('/api/users', userRouter);
app.use('/api/cryptos', cryptoRouter);
app.use('/api/user-crypto', usercryptoRouter);