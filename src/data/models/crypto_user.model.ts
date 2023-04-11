import { NUMBER, STRING } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({
  freezeTableName: true, //  indica que el nombre de la tabla no va a cambiar
  schema: "crypto",
  tableName: "crypto_user",
  createdAt: false,
  updatedAt: false,
})
export class CryptoUserPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: "user_id",
  })
  userId: string;

  @Column({
    primaryKey: true,
    type: STRING,
    field: "crypto_id",
  })
  cryptoId: string;

  @Column({
    type: NUMBER,
    field: "amount",
  })
  amount: number;
}
