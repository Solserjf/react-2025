import {UsersComponent} from "../components/users/UsersComponent.tsx";

export const UsersPage = () => {// UsersPage - це класичний компонент, ф-ція яка повертає розмітку(сторінка з інф-цією про юзерів)
    return (                    // але UsersPage відмальовкою UI безпосередньо не займається
        <div>
            <UsersComponent/>
        </div>
    );
};