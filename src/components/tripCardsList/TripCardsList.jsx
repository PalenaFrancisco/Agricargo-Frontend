import TripCard from "../tripCard/TripCard";
// import Button from "../button/Button";
// import { HiMiniArrowsUpDown } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";

const TripCardsList = ({ trips, fav }) => {
  const cardsMapped = trips.map((trip, index) => (
    <TripCard
      key={index}
      price={trip.price}
      destination={trip.destination}
      origin={trip.origin}
      shipingTime={trip.shippingTime}
      nextShiping={trip.nextShipping}
      bussinesName={trip.businessName}
      isFav={fav}
    />
  ));

  return <div className="flex flex-col gap-4 w-full">{cardsMapped}</div>;
};

export default TripCardsList;
