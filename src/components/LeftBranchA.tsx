import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const LeftBranchA = () => {
    const {counterValue} = useContext(MyContext);
    return (
        <div>
            LeftBranchA
            <p>current counter value is = {counterValue}</p>
        </div>
    );
};