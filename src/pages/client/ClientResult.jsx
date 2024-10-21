import TripCardsList from "../../components/tripCardsList/TripCardsList";
import { useState } from "react";
import SortSection from "../../components/sortSection/SortSection";


const ClientResult = ({ data, resetData, setter, isFavorites = true }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

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
