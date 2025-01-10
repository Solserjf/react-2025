import {ITodosResponse} from "../models/ITodosResponse.ts";

const url = import.meta.env.VITE_API_URL;

export const getTodos = async ():Promise<ITodosResponse> => {
    const todos = await fetch(url + '/todos').then(value => value.json());
    return todos;
};
