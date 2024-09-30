import TripCard from "../components/tripCard/TripCard";
import React from 'react'

const TripCardsList = ({ trips }) => {
    const cardsMapped = trips.map((trip, index) => (
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
        <div className="overflow-y-scroll h-84 w-full p-2" style={{ maxHeight: '500px' }}>
            {cardsMapped}
        </div>
    )
}

export default TripCardsList