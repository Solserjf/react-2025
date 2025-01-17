import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '1'});
    //query - це початковий стан нашого параметру {pg: '1'} а setQuery - це сеттер для нього
    // тобто setQuery -це змінений query і ось тут  setQuery({pg:currentPage.toString()}) ми передаємо
    // нове змінене значення pg у саме query за допомогою setQuery
    return (
        <div>
            <button onClick={()=> {
                const pg = query.get('pg');
                if(pg){
                    let currentPage = +pg;
                    setQuery({pg: (--currentPage).toString()});
                }
            }} >prev</button>
            <button onClick={()=> {
                const pg = query.get('pg');
                if(pg){
                    let currentPage = +pg;
                    setQuery({pg: (++currentPage).toString()});
                }
            }}>next</button>
        </div>
    );
};