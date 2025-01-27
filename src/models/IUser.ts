import {IUserChildAddress, IUserChildCompany} from "./IUsersResponceModel.ts";

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IUserChildAddress;
	phone: string;
	website: string;
	company: IUserChildCompany;
}