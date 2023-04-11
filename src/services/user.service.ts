import { NewUserDto, UserDto } from "../types";
import { UserRepository } from "../data/repositories/user.repository";
import { UserPojo } from "../data/models/user.model";


export class UserService {
  _userRepository: UserRepository;
  constructor() {
    this._userRepository = new UserRepository();
  }

  //La respuesta va al controlador
  async addUser(user: NewUserDto): Promise<string> {
    const userPojo: UserPojo = this.parseDtoIntoPojo(user);
    console.log(userPojo)
    const userPromise = await this._userRepository
      .addUser(userPojo)
      .then((userId) => {
        return userId;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  parsePojoIntoDto(userPojo: UserPojo): UserDto {
    const userDto: UserDto = {
      userId: userPojo.dataValues.userId,
      username: userPojo.dataValues.username,
      password: userPojo.dataValues.password,
      email: userPojo.dataValues.email,
      fullName: userPojo.dataValues.fullname,
      birthDate: userPojo.dataValues.birthdate,
      deposit: userPojo.dataValues.deposit,
    };

    return userDto;
  }

  async getAllUsers(): Promise<UserDto[]> {
    const userPromise = await this._userRepository
      .getAllUsers()
      .then((usersAsPojo) => {
        let usersAsDto: UserDto[] = [];
        usersAsPojo.forEach((userAsPojo) => {
          let userAsDto = this.parsePojoIntoDto(userAsPojo);
          usersAsDto.push(userAsDto);
        });
        //TODO : Llamar al repositorio
        return usersAsDto;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });

    return userPromise;
  }

  async getUserById(id: number): Promise<UserDto | undefined> {
    const userPromise = await this._userRepository
      .getUserById(id)
      .then((userAsPojo) => {
        if (!!userAsPojo) return this.parsePojoIntoDto(userAsPojo);
        else return undefined;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return userPromise;
  }

  parseDtoIntoPojo(userDto: NewUserDto): UserPojo {
    return userDto as UserPojo;
  }
}
