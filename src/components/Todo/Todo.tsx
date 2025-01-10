import {ITodo} from "../../models/ITodo.ts";

interface Props {
    item: ITodo;
}

export const Todo = ({item}: Props) => {
    return (
        <>
            <h2>{item.id}</h2>
            <h3>{item.todo}</h3>
        </>
    );
};