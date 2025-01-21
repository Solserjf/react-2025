import axios from "axios";
import {IUser} from "../model/IUser.ts";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const getAllUsers = async ():Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}
//interceptors - перехоплювачі (перехоплюють дані як з responce так і з request)
axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers['xxx'] = 'xxxx';//додали свій header xxx зі значенням xxxx у список headers нашого об'єкту
    console.log(request.method);
    return request;
});

export const saveUser = async (user:IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>('/users', user);
    return data;
}



// axiosInstance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// })


// fetch("YOUURL", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify({
//         key1: 'value1',
//         key2: 'value2',
//     })
// })