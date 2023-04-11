import { Table, Column, Model } from "sequelize-typescript";
import { STRING, NUMBER} from "sequelize"
import { v4 as uuid} from 'uuid';


@Table({
  freezeTableName: true, //  indica que el nombre de la tabla no va a cambiar
  schema: 'crypto',
  tableName: "user",
  createdAt: false,
  updatedAt: false
})
export class UserPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: 'user_id'
  })
  userId: string = uuid();;

  @Column({
    type: STRING,
    field: 'username'
  })
  username: string;
  @Column({
    type: STRING,
    field: 'password'
  })
  password: string;

  @Column({
    type: STRING,
    field: 'email'
  })
  email:string;

  @Column({
    type: STRING,
    field: 'fullname'
  })
  fullName:string;

  @Column({
    type: STRING,
    field: 'birthdate'
  })
  birthDate: string;

  @Column({
    type: NUMBER,
    field: 'deposit'
  })
  deposit: number;
}
