import TripCardsList from "../../components/tripCardsList/TripCardsList";
import { useState } from "react";
import SortSection from "../../components/sortSection/SortSection";

const ClientResult = ({ data, setter, isFavorites = false }) => {
  const [initialData, setInitialData] = useState(data)
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

  const sortTripsByPrice = () => {
    const sorted = [...data].sort((a, b) => {
      return isAscending
        ? a.pricePerTon - b.pricePerTon
        : b.pricePerTon - a.pricePerTon;
    });
    setter(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };
  const sortTripsByDate = () => {
    const sorted = [...data].sort((a, b) => {
      return isAscending
        ? new Date(a.departureDate) - new Date(b.departureDate)
        : new Date(b.departureDate) - new Date(a.departureDate);
    });
    setter(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const resetFilters = () => {
    setter(initialData);
    setFilterActivate(!filterActivate);
  };

  const sortOptions = [
    { label: "Precio", actionSort: sortTripsByPrice },
    { label: "Fecha", actionSort: sortTripsByDate },
  ];

  return (
    <>
      <SortSection
        title={isFavorites ? "Favoritos:" : "Resultados:"}
        sortOptions={sortOptions}
        filterActivate={filterActivate}
        resetFilters={resetFilters}
      />
      <div className="px-20 w-full py-6">
        <TripCardsList trips={data} fav={isFavorites ? true : false}/>
      </div>
    </>
  );
};

export default ClientResult;
