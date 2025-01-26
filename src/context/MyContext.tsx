import {createContext} from "react";
type MyContextType = {
        counterValue: number;
        increment: (obj: number) => void;
}

export const init = {
    counterValue: 0,
    increment: (obj: number) => {//у increment передається поточне значення counterValue
        console.log(obj);
    }
}


export const MyContext = createContext<MyContextType>(init);//ця ф-ція створює сховище для наших об'єктів
//у цьому файлі компоненти будуть ділитися між собою інформацією