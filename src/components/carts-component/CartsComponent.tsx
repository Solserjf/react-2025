import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {ICard} from "../../models/ICard.ts";
import {ICardResponseModel} from "../../models/ICardResponseModel.ts";
import {cartService} from "../../services/api.service.ts";

export const CartsComponent = () => {
    const {id} = useParams();
    console.log(id);
    const [carts, setCarts] = useState<ICard[]>([]);
    useEffect(() => {
        if(id){
   cartService.getCartsOfUser(id)
        .then(({carts}:ICardResponseModel)=> {
            setCarts(carts);
        });
    }},[id]);

    return (
        <div>
            {
                carts.map((cart:ICard)=>(<div key={cart.id}>{cart.total}</div>))
            }
        </div>
    );
};


