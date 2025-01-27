import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import {IUser} from "./models/IUser.ts";
import {baseUrl} from "./services/service.api.ts";


export function App() {
    const users = useFetch<IUser[]>(baseUrl + "/users");

    return (
        <>
            {
                users &&
                users.map((user) => (
                    <div key={user.id}>
                        {user.id}: {user.name}
                    </div>
                ))
            }
        </>
    );
}




