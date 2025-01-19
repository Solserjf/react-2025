import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUsers} from "../../models/IUsers.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {getAllUsers} from "../../services/service.api.ts";

export const UsersComponents = () => {
    const [query] = useSearchParams();
    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        getAllUsers(pg || '1').then(value => {setUsers(value.users)});
    }, [query]);
    return (
        <div>
            {
               users.map((value: IUsers) => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};