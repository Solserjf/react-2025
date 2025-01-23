import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {
    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products);
        }).catch(reason => console.log(reason));
        refresh().then(() => loadAuthProducts())
            .then(values => console.log(values))
    })
    return (
        <>AuthResourcesPage</>
    );
};