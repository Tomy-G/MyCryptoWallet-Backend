export class UserDto{
    userId : string;
    username : string;
    password : string;
    email : string;
    fullName : string;
    birthDate : string;
    deposit : number;
}

export type NewUserDto = Omit<UserDto, 'userId'>

export class CryptoDto{
    cryptoId : string;
    cryptoname : string;
    value : number;
    icon : string;
    asset : string;
    stock : number;
}

export class CryptoUserDto{
    userId : string;
    cryptoId : string;
    amount : number;
}