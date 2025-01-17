import {IReqResInPesponse} from "../models/IReqResInPesponse.ts";

export const getAllUsers = async (pg: string):Promise<IReqResInPesponse> => {
   return  await fetch('https://reqres.in/api/users?page=' + pg).then(value => value.json());
}



