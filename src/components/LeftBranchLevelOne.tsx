import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


export const LeftBranchLevelOne = () => {
    const {changeThemeColor} = useContext(MyContext);

    const handlerDarkColor = () => {
        changeThemeColor('darkColorTheme');
    };
    const handlerLightColor = () => {
        changeThemeColor('lightColorTheme');
    };
    return (
        <div>
            <button onClick={handlerDarkColor}>change the theme to dark</button>
            <button onClick={handlerLightColor}>change the theme to light</button>
        </div>
    );
};