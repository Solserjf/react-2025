import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/api.sertvice.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";

export const UsersComponent = () => {
    // const [query, setQuery] = useSearchParams(); //тут тільки зчитуємо параметр тому я видалив setQuery щоб воно не підсвічувалось як помилка
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {
        //const pg: string | null = query.get('pg');//якщо  pg більше ніде не використовується тоді записуємо одразу вираз  query.get('pg');
        getAllUsers(query.get('pg') || '1').then(value => setUsers(value.data));
    }, [query])
    return (
        <div>
            {
                users.map(value => <UserComponent item={value} key={value.id}/>)
            }
        </div>
    );
};