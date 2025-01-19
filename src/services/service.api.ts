import {IDummyInResponse} from "../models/IDummyInResponse.ts";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllUsers = async (pg: string):Promise<IDummyInResponse> => {
    const limit = 30;
    const skip = limit*(+pg) - limit;
   return await fetch(`${baseUrl}/users?page=` + pg + '&skip=' + skip).then(value => value.json());
};


