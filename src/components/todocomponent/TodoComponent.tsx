import {IModel} from "../../models/IModel.ts";
import './TodoComponent.css'
interface ModelProps {
    item: IModel;
}

export const TodoComponent = ({item}: ModelProps) => {

    return (
        <div>
            <h3>{item.id}</h3>
            <h2 className={item.completed? 'y' : 'n'}>{item.title}</h2>
        </div>
    );
};