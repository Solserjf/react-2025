import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

export const UsersComponent = () => {
    console.log('Users');
    const [users, setUsers] = useState([]);
    const foo = useCallback(() => {//ця ф-ція перестворюється щоразу як відбувається рірендер
        console.log('test');// якщо будуть аргументи у ф-ції то їх потрібно буде визначити у залежностях(пустий масив над useEffect)
    }, []) // таким чином ф-ція відпрацює тільки раз бо ми  її закешували
    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {
             setUsers(value);// якщо ми щось сетаємо(setUsers(value)) - відбувається updating компоненту що викликає рірендер цього компоненту
             })//мемоізувати потрібно 'важкі' компоненти, де є багато логіки, цикли, бо мемоізація несе сповільнення, і прості звичні компоненти немає сенсу мемоізовувати щоб не сповільнювати с-му
            console.log(users);
         return () => {
             console.log('unsubscribe');
         }
    }, []);
    return (
        <div>
            users component
            <UserComponent foo={foo}/> // тобто ми кешуємо тепер не тільки компонент а і його props як в даному випадку з ф-цію foo яка тут виступає як props
        </div>
    );
};
