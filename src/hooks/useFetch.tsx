import {useEffect, useState} from "react";

export const useFetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => {
            setUsers(value);// якщо ми щось сетаємо(setUsers(value)) - відбувається updating компоненту що викликає рірендер цього компоненту
        })//мемоізувати потрібно 'важкі' компоненти, де є багато логіки, цикли, бо мемоізація несе сповільнення, і прості звичні компоненти немає сенсу мемоізовувати щоб не сповільнювати с-му
        console.log(users);
        return () => {
            console.log('unsubscribe');
        }
    }, []);
    return users;
};
//хуки можна вик-ти у функціональних компонентах або в інших хуках