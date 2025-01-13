import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
             {/*Outlet - точка в якій буде відображатись element (що вказаний після  path у ф-лі main.tsx)*/}
            <Outlet/>
        </div>
    );
};