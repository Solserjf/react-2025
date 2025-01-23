import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {//перехоплюємо get - запити
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})

type loginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

export const login = async ({username, password, expiresInMins}: loginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins
    });
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));//відправляємо дані в сховище на зберігання
    return userWithTokens;
}
// на цей запит повернеться відповідь що буде містити юзерів з токенами
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return data.products;
}

export const refresh = async (): Promise<void> => {
// достаємо зі сховища рефреш-токен
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');//дістали юзера зі сховища
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken:iUserWithTokens.refreshToken,
        expiresInMins: 1// оновили для юзера токени
})
    ;
    console.log(accessToken);
    console.log(refreshToken);
    iUserWithTokens.accessToken = accessToken;//замінили токени
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));// повернули назад у сховище(localStorage)
}

