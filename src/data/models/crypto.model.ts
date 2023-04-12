import { Table, Column, Model } from "sequelize-typescript";
import {INTEGER, STRING, DATE, SMALLINT, NUMBER} from "sequelize"

@Table({
  freezeTableName: true, //  indica que el nombre de la tabla no va a cambiar
  schema: 'crypto',
  tableName: "cryptocurrency",
  createdAt: false,
  updatedAt: false
})
export class CryptoPojo extends Model {
  @Column({
    primaryKey: true,
    type: STRING,
    field: 'crypto_id'
  })
  cryptoId: string;

  @Column({
    type: STRING,
    field: 'cryptoname'
  })
  cryptoname: string;
  @Column({
    type: NUMBER,
    field: 'value'
  })
  value: number;

  @Column({
    type: STRING,
    field: 'icon'
  })
  icon:string;

  @Column({
    type: STRING,
    field: 'asset'
  })
  asset:string;

  @Column({
    type: NUMBER,
    field: 'stock'
  })
  stock: number;
}
