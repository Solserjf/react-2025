import {TodoComponent} from "../todocomponent/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {IModel} from "../../models/IModel.ts";


export const TodoComponents = () => {
    const [components, setComponents] = useState<IModel[]>([]);
    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json()).then((valueIModel: IModel[]) => {
           setComponents(valueIModel);
             })
    }, []);
    return (
        <>
            {
                components.map(component => <TodoComponent key={component.id} item={component}/>)
            }
        </>
    );
};