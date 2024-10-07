import ClientLayout from "../../layout/ClientLayout";
import TripCardsList from "../../components/tripCardsList/TripCardsList";
import { useEffect, useState } from "react";
import SortSection from "../../components/sortSection/SortSection";
import { fetchData } from "../../utils/fetchData";
import { useDataContext } from "../../components/context/DataProvider";

const ClientResult = ({ isFavorites = true }) => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);
  const { inputValues } = useDataContext();

  const endpoint = isFavorites ? "/favTrips.json" : "/trips.json";

  useEffect(() => {
    fetchData(endpoint)
      .then((response) => {
         if (!isFavorites) {
           const filt = response.filter((r) => {
             return (
               r.origin === inputValues.origin &&
               r.destination === inputValues.destination 
               &&
               r.quantity === inputValues.quantity
             );
           });
           setTrips(filt);
           setFilteredTrips(filt);
         } else {
           setTrips(response);
           setFilteredTrips(response);
         }
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorites]);

  const sortTripsByPrice = () => {
    const sorted = [...trips].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setFilteredTrips(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };
  const sortTripsByDate = () => {
    const sorted = [...trips].sort((a, b) => {
      return isAscending
        ? new Date(a.nextShipping) - new Date(b.nextShipping)
        : new Date(b.nextShipping) - new Date(a.nextShipping);
    });
    setFilteredTrips(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const resetFilters = () => {
    setFilteredTrips(trips);
    setFilterActivate(!filterActivate);
  };

  const sortOptions = [
    { label: "Precio", actionSort: sortTripsByPrice },
    { label: "Fecha", actionSort: sortTripsByDate },
  ];

  return (
    <ClientLayout search={!isFavorites}>
      <SortSection
        title={isFavorites ? "Favoritos:" : "Resultados:"}
        sortOptions={sortOptions}
        filterActivate={filterActivate}
        resetFilters={resetFilters}
      />
      <div className="px-20 w-full py-6">
        <TripCardsList trips={filteredTrips} fav={isFavorites ? true : false} />
      </div>
    </ClientLayout>
  );
};

export default ClientResult;
