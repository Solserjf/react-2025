import {useEffect, useState} from "react";
import {getAllCars} from "../../services/api.service.ts";
import {ICar} from "../../models/ICars.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";



export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getAllCars().then(cars => setCars(cars));
    }, []);
    return (
        <div>
            {
                cars.map(car => <CarComponent item={car} key={car.id}/>)
            }
        </div>
    );
};