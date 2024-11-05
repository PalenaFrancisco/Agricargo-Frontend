import TripCard from "../tripCard/TripCard";
// import Button from "../button/Button";
// import { HiMiniArrowsUpDown } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";

const TripCardsList = ({ trips = [], fav }) => {
  const cardsMapped = trips.map((trip) => {
    const data = trip.trip ? trip.trip : trip;

    // const dataId = trip.id ?? trip.trip.id;
       const dataId = fav ? trip.id : data.id;

    console.log(fav ? trip.id : data.id);

    return (
      <TripCard
        key={data.id}
        id={fav ? dataId : trip.id}
        pricePerTon={data.pricePerTon}
        destination={data.destination}
        origin={data.origin}
        departureDate={data.departureDate}
        arriveDate={data.arriveDate}
        capacity={data.capacity}
        isFav={fav}
      />
    );
  });
console.log(JSON.stringify(trips))
  return <div className="flex flex-col gap-4 w-full">{cardsMapped}</div>;
};

export default TripCardsList;
