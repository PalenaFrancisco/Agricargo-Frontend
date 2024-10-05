import ClientLayout from "../../layout/ClientLayout";
import TripCardsList from "../../components/tripCardsList/TripCardsList";
import SortPill from "../../components/sortPill/SortPill";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../../components/button/Button";

const ClientSearchResult = ({ data }) => {
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

  return (
    <>
      <ClientLayout search={true}>
        <div className="flex justify-start border-b-2 w-full pl-20 pt-10 items-center gap-2">
          <section className="mb-8 flex items-center gap-x-6">
            <h2 className="text-black text-lg font-semibold uppercase">
              Resultados:
            </h2>
            <SortPill actionSort={sortTripsByPrice}>Precio</SortPill>
            <SortPill actionSort={sortTripsByDate}>Fecha</SortPill>
            {filterActivate && (
              <Button
                className={"rounded-lg flex items-center p-2 gap-1 m-0 text-sm"}
                actionClick={resetFilters}
              >
                <RxCross2 /> Eliminar Filtro
              </Button>
            )}
          </section>
        </div>
        <div className="px-20 w-full py-6">
          <TripCardsList trips={filteredTrips} />
        </div>
      </ClientLayout>
    </>
  );
};

export default ClientSearchResult;
