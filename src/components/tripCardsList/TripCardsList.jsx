import TripCard from "../tripCard/TripCard";
import Button from "../button/Button";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import './tripCardsList.css';

const TripCardsList = ({ trips }) => {
    const [filteredTrips, setFilteredTrips] = useState(trips);
    const [isAscending, setIsAscending] = useState(true);
    const [filterActivate, setFilterActivate] = useState(false);

    // Función para ordenar los viajes por precio
    const sortTripsByPrice = () => {
        const sorted = [...filteredTrips].sort((a, b) => {
            return isAscending ? a.price - b.price : b.price - a.price;
        });
        setFilteredTrips(sorted);
        setIsAscending(!isAscending); // Cambiar el orden para la próxima vez
        setFilterActivate(true)
    };

    // Función para eliminar los filtros y mostrar los viajes originales
    const resetFilters = () => {
        setFilteredTrips(trips);
        setFilterActivate(!filterActivate)
    };


    const cardsMapped = filteredTrips.map((trip, index) => (
        <TripCard
            key={index}
            price={trip.price}
            destination={trip.destination}
            origin={trip.origin}
            shipingTime={trip.shippingTime}
            nextShiping={trip.nextShipping}
            bussinesName={trip.businessName}
        />
    ));

    return (
        <>
            <div className="flex justify-start border-b-2 w-full pl-20 pt-[50px]  items-center gap-2">
                <h2 className="text-black text-xl pb-3">Resultados:</h2>
                <Button className={"rounded-lg flex items-center p-2 gap-1 mb-4"} actionClick={sortTripsByPrice}><HiMiniArrowsUpDown /> Ordenar por Precio {isAscending ? "Ascendente" : "Descendente"}</Button>
                {/* <Button className={"rounded-lg flex items-center p-2 gap-1 mb-4"} actionClick={sortTripsByPrice}><HiMiniArrowsUpDown /> Precio</Button> */}
                {filterActivate && <Button className={"rounded-lg flex items-center p-2 gap-1 mb-4"} actionClick={resetFilters}><RxCross2 /> Eliminar Filtro</Button>}
            </div>
            <div className="flex flex-col gap-4 w-full p-20 pt-6 overflow-y-scroll custom-scrollbar" style={{ maxHeight: '700px' }}>

                {cardsMapped}
            </div>
        </>
    )
}

export default TripCardsList