import TripCard from "../tripCard/TripCard";
// import Button from "../button/Button";
// import { HiMiniArrowsUpDown } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";

const TripCardsList = ({ trips = [], fav }) => {
  const cardsMapped = trips.map((trip) => (
    <TripCard
      key={trip.id}
      pricePerTon={trip.pricePerTon}
      destination={trip.destination}
      origin={trip.origin}
      departureDate={trip.departureDate}
      arriveDate={trip.arriveDate}
      capacity={trip.capacity}
      isFav={fav}
    />
  ));

  return <div className="flex flex-col gap-4 w-full">{cardsMapped}</div>;
};

export default TripCardsList;
