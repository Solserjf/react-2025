import {Outlet} from "react-router";
import {MenuComponents} from "../menu/MenuComponents.tsx";


const MainLayout = () => {
    return (
        <div>
        <MenuComponents/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
