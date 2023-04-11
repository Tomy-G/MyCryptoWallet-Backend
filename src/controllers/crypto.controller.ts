import { CryptoService } from "../services/crypto.service";
const cryptoService: CryptoService = new CryptoService();

export const cryptoController = {

  getAllCryptos: (_req: any, res: any) => {
    cryptoService
      .getAllCryptos()
      .then((result) => {
        res.json(result);
      })
      .catch((excepion) => {
        console.error(excepion);
        res.sendStatus(500);
      });
  },

  
};


//PUT Y POST VAN CON BODY Y GET CON PARAMS