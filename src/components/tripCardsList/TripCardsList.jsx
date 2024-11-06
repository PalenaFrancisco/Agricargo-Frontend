import TripCard from "../tripCard/TripCard";


const TripCardsList = ({ trips = [], fav }) => {
  const cardsMapped = trips.map((trip) => {
    const data = trip.trip ? trip.trip : trip;

    const dataId = fav ? trip.id : data.id;
    

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
        ship={data.ship}
        favId={data.favId}
        isFav={fav}
      />
    );
  });



  return <div className="flex flex-col gap-4 w-full">{cardsMapped}</div>;
};

export default TripCardsList;
