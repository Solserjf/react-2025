import {useEffect, useState} from "react";
import {IUser} from "../model/IUser.ts";
import {UserComponent} from "../../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((allUsers)=> {
            setUsers(allUsers);
        })
    }, []);
    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};