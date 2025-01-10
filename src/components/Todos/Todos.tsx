import {useEffect, useState} from "react";
import {getTodos} from "../../services/api.service.ts";
import {Todo} from "../Todo/Todo.tsx";
import {ITodo} from "../../models/ITodo.ts";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos().then(({todos}) => {
            setTodos(todos)
        })
    }, []);
    return (
        <>
            {
                todos.map(todo => <Todo item={todo} key={todo.id}/>)
            }
        </>

    );
};