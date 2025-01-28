import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import './LeftBranchLevelOne.css'


export const RightBranchLevelOne = () => {
    const {themeColor} = useContext(MyContext);
    return (
        <div className={themeColor}>
                this is component RightBranchLevelOne : {themeColor}
        </div>
    );
};