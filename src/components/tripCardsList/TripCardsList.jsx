import TripCard from "../tripCard/TripCard";


const TripCardsList = ({ trips = [], fav }) => {
  const cardsMapped = trips.map((trip) => {
    // const data = trip.trip ? trip.trip : trip;

    // const dataId = fav ? trip.id : data.id;
    

    return (
      <TripCard
        key={trip.id}
        id={trip.id}
        pricePerTon={trip.pricePerTon}
        destination={trip.destination}
        origin={trip.origin}
        departureDate={trip.departureDate}
        arriveDate={trip.arriveDate}
        capacity={trip.capacity}
        ship={trip.ship}
        favId={trip.favId}
        isFav={fav}
      />
    );
  });



  return <div className="flex flex-col gap-4 w-full">{cardsMapped}</div>;
};

export default TripCardsList;
