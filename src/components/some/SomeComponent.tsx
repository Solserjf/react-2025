import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export const SomeComponent = () => {
   // const [query, setQuery] = useSearchParams(); //тут тільки зчитуємо параметр тому я видалив setQuery щоб воно не підсвічувалось як помилка
        const [query] = useSearchParams();
    useEffect(() => {
        const pg: string | null = query.get('pg');
        console.log(pg);
         fetch('https://reqres.in/api/users?page='+pg).then(value => value.json()).then(value => {
             console.log(value);
             })
    }, [query])
    return (
        <div>
            Some content
        </div>
    );
};