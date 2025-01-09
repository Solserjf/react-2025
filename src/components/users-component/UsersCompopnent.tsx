import  {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";

const UsersCompopnent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null);
    useEffect(() => {
        getUsers()
        .then(response => {
            setUsers(response);
        });
        return () => {
            console.log('done');
        }
    }, []);

    const foo =  (item:IUser) => {
       setItem(item);
    }
    return (
        <div>
            {JSON.stringify(item)}

            {users.map(user => <UserComponent foo={foo} key={user.id} item={user} />)}
        </div>
    );
};

export default UsersCompopnent;