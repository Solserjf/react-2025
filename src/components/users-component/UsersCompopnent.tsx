import  {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";

const UsersCompopnent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers()
        .then(response => {
            setUsers(response);
        });
        return () => {
            console.log('done');
        }
    }, []);
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} item={user} />)}
        </div>
    );
};

export default UsersCompopnent;