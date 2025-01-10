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

//ПИТАННЯ:  ЧОМУ У ЦЬОМУ ФАЙЛІ МИ НЕ МОЖЕМО ВИКОРИСТАТИ НАПРЯМУ  interface IModel(з файлу IModel.ts) . А НАТОМІСТЬ МИ ТУТ ЩЕ ОДИН ІНТЕРФЕЙС ПРОПИСУЄМО interface ModelProps.
//МАЮ НА УВАЗІ ЧОМУ МИ ТУТ НЕ МОЖЕМО ПРОПИСАТИ НАСТУПНЕ: export const TodoComponent = ({item}: IModel) => {..........}
//І ЩЕ - В МЕНЕ ЗМІННІ ЗДАЄТЬСЯ НЕ ПО КОНТЕКСТУ ДЕЯКІ НАЗВАНІ? (ФАЙЛ TodoComponents)? МОЖНА РОЗ'ЯСНИТИ?
//І ЩЕ: ЗАПИТ ПОТРІБНО РОБИТИ ЧЕРЕЗ СЕРВІС... А В МЕНЕ ЯК?
