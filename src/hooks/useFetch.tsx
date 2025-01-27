import {useEffect, useState} from "react";

export const useFetch = <T, >(baseUrl: string) => {
    const [obj, setObj] = useState<T>();
    useEffect(() => {
        fetch(baseUrl).then(value => value.json()).then(value => {
            setObj(value);
        })
    }, []);

    return obj

};

