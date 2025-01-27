import {IUser} from "./IUser.ts";

export type IUsersResponseModel = IUser[];
export interface IUserChildAddressGeo {
    lat: string;
    lng: string;
}
export interface IUserChildAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserChildAddressGeo;
}
export interface IUserChildCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}