import {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {ICardResponseModel} from "../models/ICardResponseModel.ts";

const baseUrl = 'https://dummyjson.com';
export const userService = {
    getAllUsers: async ():Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users').then(res => res.json());
    }
};
export const  cartService = {
        getCartsOfUser: async (userId:string):Promise<ICardResponseModel> => {
            return await fetch('https://dummyjson.com/carts/user/' + userId).then(res => res.json());
        }
};
