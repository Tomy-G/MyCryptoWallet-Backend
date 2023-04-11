import { CryptoPojo } from "../models/crypto.model";
import { connect } from "../config/crypto.db.config";

export class CryptoRepository {
    _database: any = {};
    _cryptoRepository: any;
  
    constructor() {
      this._database = connect();
      this._cryptoRepository = this._database.sequelize.getRepository(CryptoPojo);
    }
  
    async getAllCryptos(): Promise<CryptoPojo[]> {
      try {
        return await this._cryptoRepository.findAll();
      } catch (error) {
        console.error(error);
        return []
      }
    }
  
    async getCryptoById(id : number): Promise<CryptoPojo | undefined> {
      try {
        return await this._cryptoRepository.findByPk(id);
      } catch (error) {
        console.error(error);
        return undefined
      }
    }
    
  }
  