import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


export const routes = createBrowserRouter([{
    path: "/",element: <MainLayout/>, children:[//при відкритті базової url у нас рендериться <MainLayout/>
        {index: true, element: <HomePage/>},// в середині Outlet нашого <MainLayout/> з'являється <HomePage/>
        {path: 'login',element: <LoginPage/>},
        {path:'/auth/resources', element: <AuthResourcesPage/>}
    ] // index: true означає що тут нічого ніколи не треда змінювати, тут буде початковий , кореневий шлях для батьківської урли
}]);