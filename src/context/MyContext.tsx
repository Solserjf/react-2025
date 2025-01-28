import {createContext} from "react";
type MyContextType = {
    themeColor: string,
    changeThemeColor: (themeColor: string) => void;
}


export const MyContext = createContext<MyContextType>({themeColor: 'lightColorTheme', changeThemeColor: (themeColor: string)=>{
    console.log(themeColor);
    }});