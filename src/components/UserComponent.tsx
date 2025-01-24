import {FC, memo} from "react";

export const UserComponent: FC<{ foo: () => void, arr: number[], item: {name:string} }> = memo( ({arr, item}) => {//ф-ція мемомізації, щоб UserComponent повторно не рендерився
    console.log('User');   // компонент UserComponent не буде рендеритися якщо він (UserComponent) не буде змінюватися(тобто йому не будуть приходити всередину ніякі props)
    console.log(arr);
    return (
        <div>{item.name}</div>
    );
});