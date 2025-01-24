import {memo} from "react";

export const UserComponent = memo( () => {//ф-ція мемомізації, щоб UserComponent повторно не рендерився
    console.log('User');   // компонент UserComponent не буде рендеритися якщо він (UserComponent) не буде змінюватися(тобто йому не будуть приходити всередину ніякі props)

    return (
        <div>user</div>
    );
});