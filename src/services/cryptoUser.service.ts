import { CryptoUserDto } from "../types";
import { CryptoUserRepository } from "../data/repositories/cryptoUser.repository";
import { CryptoUserPojo } from "../data/models/crypto_user.model";

export class CryptoUserService {
  _cryptoUserRepository: CryptoUserRepository;
  constructor() {
    this._cryptoUserRepository = new CryptoUserRepository();
  }

  parsePojoIntoDto(cryptoUserPojo: CryptoUserPojo): CryptoUserDto {
    const cryptoDto: CryptoUserDto = {
        userId : cryptoUserPojo.dataValues.userId,
        cryptoId: cryptoUserPojo.dataValues.cryptoId,
        amount: cryptoUserPojo.dataValues.amount
    };
    return cryptoDto;
  }

  parseDtoIntoPojo(cryptoUserDto: CryptoUserDto): CryptoUserPojo {
    // Los pojos no se incicializan como constantes

    return cryptoUserDto as CryptoUserPojo;
  }

  async addOrder(order: CryptoUserDto): Promise<string> {
    let cryptoUserPojo: CryptoUserPojo = this.parseDtoIntoPojo(order);
    const orderPromise = await this._cryptoUserRepository
      .addOrder(cryptoUserPojo)
      .then((userId) => {
        return userId;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return orderPromise;
  }

  async updateOrder(order: CryptoUserDto): Promise<string> {
    const cryptoUserPojo: CryptoUserPojo = this.parseDtoIntoPojo(order);
    const orderPromise = await this._cryptoUserRepository
      .updateOrder(cryptoUserPojo)
      .then((userId) => {
        return userId;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return orderPromise;
  }

  async getCryptosByUserId(userId: string): Promise<CryptoUserDto[]> {
    const cryptoUserPromise = await this._cryptoUserRepository
      .getCryptosByUserId(userId)
      .then((cryptoUsersAsPojo) => {
        let cryptoUsersAsDto: CryptoUserDto[] = [];
        cryptoUsersAsPojo.forEach((cryptoUserAsPojo) => {
          let cryptoUserAsDto = this.parsePojoIntoDto(cryptoUserAsPojo);
          cryptoUsersAsDto.push(cryptoUserAsDto);
        });
        return cryptoUsersAsDto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });

    return cryptoUserPromise;
  }
}
