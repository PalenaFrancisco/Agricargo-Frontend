import ClientLayout from "../../layout/ClientLayout";
import TripCardsList from "../../components/tripCardsList/TripCardsList";
import { useState } from "react";
import SortSection from "../../components/sortSection/SortSection";

const ClientResult = ({ data, isFavorites = true }) => {
  const [trips, setTrips] = useState(data);
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

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
        <TripCardsList trips={filteredTrips} />
      </div>
    </ClientLayout>
  );
};

export default ClientResult;
