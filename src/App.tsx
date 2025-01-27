import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";
import {IUser} from "./models/IUser.ts";


export function App() {
    const users = useFetch<IUser[]>("https://jsonplaceholder.typicode.com/users");

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

// чому якщо я заміняю "https://jsonplaceholder.typicode.com/users" на BaseUrl + '/users' - у мене не виводяться юзери на єкран
// тобто const users = useFetch<IUser[]>(baseUrl + '/users');


