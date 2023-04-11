import { CryptoDto } from "../types";
import { CryptoRepository } from "../data/repositories/crypto.repository";
import { CryptoPojo } from "../data/models/crypto.model";

export class CryptoService {
  _cryptoRepository: CryptoRepository;
  constructor() {
    this._cryptoRepository = new CryptoRepository();
  }

  parsePojoIntoDto(cryptoPojo: CryptoPojo): CryptoDto {
    const cryptoDto: CryptoDto = {
      cryptoId: cryptoPojo.dataValues.cryptoId,
      cryptoname: cryptoPojo.dataValues.cryptoname,
      value: cryptoPojo.dataValues.value,
      icon: cryptoPojo.dataValues.icon,
      asset: cryptoPojo.dataValues.asset,
      stock: cryptoPojo.dataValues.stock
    };

    return cryptoDto;
  }

  async getAllCryptos(): Promise<CryptoDto[]> {
    const cryptoPromise = await this._cryptoRepository
      .getAllCryptos()
      .then((cryptosAsPojo) => {
        let cryptosAsDto: CryptoDto[] = [];
        cryptosAsPojo.forEach((cryptoAsPojo) => {
          let cryptoAsDto = this.parsePojoIntoDto(cryptoAsPojo);
          cryptosAsDto.push(cryptoAsDto);
        });
        return cryptosAsDto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });

    return cryptoPromise;
  }
}
