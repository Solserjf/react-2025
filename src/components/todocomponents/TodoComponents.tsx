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
//components, setComponents, <IModel> - це не по контексту.
// А ось завдання: Task 1 ohm4AivCEBv
// https://jsonplaceholder.typicode.com/todos - тут масив даних. ознайомтесь з ним для початку
// Створити компонент TodoComponent який буде містити інформацію про окремий об'єкт з масиву.
// Створити компонент TodoComponents в якому відбувається ітерація масиву даних отриманих з апі.
// Кореневим компонентом є App