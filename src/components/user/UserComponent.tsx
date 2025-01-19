import {IUsers} from "../../models/IUsers.ts";
import {FC} from "react";

type PropsType = {
    item: IUsers;
}

export const UserComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            <div>{item.id} {item.firstName} {item.lastName}</div>
        </div>
    );
};