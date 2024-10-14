import ClientLayout from "../../layout/ClientLayout";
import TripCardsList from "../../components/tripCardsList/TripCardsList";
import { useState } from "react";
import SortSection from "../../components/sortSection/SortSection";
// import { fetchData } from "../../utils/fetchData";

const ClientResult = ({ data, resetData, setter, isFavorites = true }) => {
  // const [trips, setTrips] = useState(data);
  // const [filteredTrips, setFilteredTrips] = useState(data);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

  // const endpoint = isFavorites ? "/favTrips.json" : "/trips.json";

  // useEffect(() => {
  //   fetchData(endpoint)
  //     .then((response) => {
  //       setTrips(response);
  //       setFilteredTrips(response);
  //     })
  //     .catch((error) => console.error(error));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isFavorites]);

  const sortTripsByPrice = () => {
    const sorted = [...data].sort((a, b) => {
      return isAscending ? a.price - b.price : b.price - a.price;
    });
    setter(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };
  const sortTripsByDate = () => {
    const sorted = [...data].sort((a, b) => {
      return isAscending
        ? new Date(a.nextShipping) - new Date(b.nextShipping)
        : new Date(b.nextShipping) - new Date(a.nextShipping);
    });
    setter(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const resetFilters = () => {
    setter(resetData);
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
        <TripCardsList trips={data} fav={isFavorites ? true : false}/>
      </div>
    </ClientLayout>
  );
};

export default ClientResult;
