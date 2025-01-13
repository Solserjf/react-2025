import {FC} from "react";
import {IUser} from "../components/model/IUser.ts";
type  UserTypeProps = {
    item: IUser
}
export const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};