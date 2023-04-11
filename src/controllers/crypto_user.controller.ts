import { CryptoUserService } from "../services/cryptoUser.service";
const cryptoUserService: CryptoUserService = new CryptoUserService();

export const cryptoUserController = {
  getCryptosByUserId: (req: any, res: any) => {
      try {
        const userId = req.params.id;
        cryptoUserService.getCryptosByUserId(userId).then((result) => {
          (result != null) ? res.json(result) : res.sendStatus(404);
        });
      } catch (exception) {
        console.error(exception);
        res.sendStatus(500);
      }
  },
  addOrder: (req: any, res: any) => {
    try {
      //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
      const newOrder = req.body;
      //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
      cryptoUserService.addOrder(newOrder).then((result) => {
        console.log(result);
        res.json(result);
      });
    } catch (exception) {
      console.error(exception);
      res.sendStatus(500);
    }
  },
  updateOrder: (req: any, res: any) => {

    try {
      //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
      const newOrder = req.body;
      //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
      cryptoUserService.updateOrder(newOrder).then((result) => {
        console.log(result);
        res.json(result);
      });
    } catch (exception) {
      console.error(exception);
      res.sendStatus(500);
    }
  }
};
