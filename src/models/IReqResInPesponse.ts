import {ISupport} from "./ISupport.ts";
import {IUser} from "./IUser.ts";

export interface IReqResInPesponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: IUser[];
	support: ISupport;
}

