import { UserPojo } from "../models/user.model";
import { connect } from "../config/user.db.config";

export class UserRepository {
  _database: any = {};
  _userRepository: any;

  constructor() {
    this._database = connect();
    this._userRepository = this._database.sequelize.getRepository(UserPojo);
  }

  async addUser(newUser: UserPojo): Promise<string> {
    try {
     newUser = await this._userRepository.create(newUser);
      return newUser.userId;
    } catch (error) {
      console.error(error);
      return "-1";
    }
  }

  async getAllUsers(): Promise<UserPojo[]> {
    try {
      return await this._userRepository.findAll();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getUserById(id: number): Promise<UserPojo | undefined> {
    try {
      return await this._userRepository.findByPk(id);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
