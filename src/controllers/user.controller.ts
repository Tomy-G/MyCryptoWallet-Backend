import { UserService } from "../services/user.service";
const userService: UserService = new UserService();

export const userController = {
  getUserbyUsernameAndPassword: (req: any, res: any) => {
    console.log(req.body.username)
    const username = req.body.username
    const pass = req.body.password
    userService
      .getUserbyUsernameAndPassword(username,pass)
      .then((result) => {
        res.json(result);
      })
      .catch((excepcion) => {
        console.error(excepcion);
        res.send(500);
      });
  },
  addUser: (req: any, res: any) => {
    try {
      //El try catch es para gestionar que el req.body pueda estar mal y provoque un bad request.
      const newUser = req.body;
      console.log("EL CUERPO ES" + req.body);

      //no puedo usar async await, porque eso paraliza la ejecución del front, es mejor usar .then()
      userService.addUser(newUser).then((result) => {
        console.log(result);
        res.json(result);
      });
    } catch (exception) {
      console.error(exception);
      res.sendStatus(500);
    }
  },

  getAllUsers: (_req: any, res: any) => {
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

  getUserById: (req: any, res: any) => {
    try {
      const userId = +req.params.id; // El más delante siginifica que TypeScript fuerza al id ser un numero
      userService.getUserById(userId).then((result) => {
        (result != null) ? res.json(result) : res.sendStatus(404);
      });
    } catch (exception) {
      console.error(exception);
      res.sendStatus(500);
    }
  },
};


//PUT Y POST VAN CON BODY Y GET CON PARAMS