import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";
import {FC} from "react";
type Props = {
    user: IUser,
}
export const UserComponent:FC<Props> = ({user}:Props) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/baskets')
    }
    return <div className={"my-5"}> {user.username}: {user.email}
        <button className={"border-2"}
                onClick={onButtonClickNavigate}> click me
        </button>
    </div>;
}