import {ICar} from "../../models/ICars.ts";
import {FC} from "react";

type PropsCar = {
    item: ICar;
}

export const CarComponent:FC<PropsCar> = ({item}) => {
    return (
        <div>
            <div>{item.id} {item.brand}</div>
        </div>
    );
};