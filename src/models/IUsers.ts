import {IUsersHair} from "./IUsersHair.ts";
import {IUsersAddress} from "./IUsersAddress.ts";
import {IUsersBank} from "./IUsersBank.ts";
import {IUsersCompany} from "./IUsersCompany.ts";
import {IUsersCrypto} from "./IUsersCrypto.ts";


export interface IUsers {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IUsersHair;
    ip: string;
    address: IUsersAddress;
    macAddress: string;
    university: string;
    bank: IUsersBank;
    company: IUsersCompany;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: IUsersCrypto;
    role: string;
}