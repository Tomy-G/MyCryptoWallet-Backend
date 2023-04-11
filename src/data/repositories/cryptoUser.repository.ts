import { CryptoUserPojo } from "../models/crypto_user.model";
import { connect } from "../config/cryptoUser.db.config";

export class CryptoUserRepository {
  _database: any = {};
  _cryptoUserRepository: any;

  constructor() {
    this._database = connect();
    this._cryptoUserRepository =
      this._database.sequelize.getRepository(CryptoUserPojo);
  }

  async getCryptosByUserId(userId: string): Promise<CryptoUserPojo[]> {
    try {
      return await this._cryptoUserRepository.findAll({
        where: {
          user_id: userId,
          //password: 'passwordDeUsuario'
        },
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getCryptoUser(
    userId: string,
    cryptoId: string
  ): Promise<CryptoUserPojo> {
    try {
      return await this._cryptoUserRepository.findOne({
        where: {
          user_id: userId,
          crypto_id: cryptoId,
        },
      });
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async addOrder(newCryptoUser: CryptoUserPojo): Promise<string> {
    try {
      let user = await this._cryptoUserRepository.create(newCryptoUser);
      return user.userId;
    } catch (error) {
      console.error(error);
      return error.toString();
    }
  }

  async updateOrder(newCryptoUser: CryptoUserPojo): Promise<string> {
    try {
      let updated = await this._cryptoUserRepository.update(newCryptoUser, {
        where: {
          user_id: newCryptoUser.userId,
          crypto_id: newCryptoUser.cryptoId,
        },
      });
      return newCryptoUser.userId;
    } catch (error) {
      console.error(error);
      return error.toString();
    }
  }
}
