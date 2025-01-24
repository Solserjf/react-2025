import {FC, memo} from "react";

export const UserComponent: FC<{ foo: () => void, arr: number[] }> = memo( ({arr}) => {//ф-ція мемомізації, щоб UserComponent повторно не рендерився
    console.log('User');   // компонент UserComponent не буде рендеритися якщо він (UserComponent) не буде змінюватися(тобто йому не будуть приходити всередину ніякі props)
    console.log(arr);
    return (
        <div>user</div>
    );
});