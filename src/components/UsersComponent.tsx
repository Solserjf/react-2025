import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";

export const UsersComponent = () => {
    console.log('Users');
   const users = useFetch();

    const arr: number[] = useMemo(() => {
        return [11,22,33];// цей масив буде закешований/мемоізований
    }, []);


    const foo = useCallback(() => {// ф-ція перестворюється щоразу як відбувається рірендер
        console.log('test');// якщо будуть аргументи у ф-ції то їх потрібно буде визначити у залежностях(пустий масив над useEffect)
    }, []) // таким чином ф-ція відпрацює тільки раз бо ми  її закешували

    return (
        <div>
            users component
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }
        </div>
        // тобто ми кешуємо тепер не тільки компонент а і його props як в даному випадку з ф-цію foo яка тут виступає як props
        // комірка arr перезаписується і UserComponent бачить це нове посилання і відбувається рірендер
    );
};
