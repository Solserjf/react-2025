import {createBrowserRouter} from "react-router";
import {AllCarsPage} from "../pages/AllCarsPage.tsx";
import {CreateFormCarPage} from "../pages/CreateFormCarPage.tsx";
import App from "../App.tsx";



export const routes = createBrowserRouter([{
    path: "/", element: <App/>, children:[
        {path: "cars", element: <AllCarsPage/>},
        {path: "cars/create", element: <CreateFormCarPage/>}
    ]
}]);