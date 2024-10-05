import { RxCross2 } from "react-icons/rx";
import Button from "../../components/button/Button";
import SortPill from "../../components/sortPill/SortPill";
import ClientLayout from "../../layout/ClientLayout";
import ReusableTable from "../../components/tables/ReusableTable";
import { useState } from "react";

const ClientReservations = () => {
  const tripsArray = [
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-5-2",
      price: "1200000",
      status: "Finalizado",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-1-13",
      price: "1100000",
      status: "En viaje",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-10-12",
      price: "1200000",
      status: "En viaje",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-10-19",
      price: "2300000",
      status: "En preparación",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-5-12",
      price: "1250000",
      status: "Finalizado",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-10-12",
      price: "1200000",
      status: "En viaje",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-9-8",
      price: "3200000",
      status: "En preparación",
    },
    {
      trip: "Córdoba - Santa Fe",
      date: "2024-6-12",
      price: "1000000",
      status: "Finalizado",
    },
  ];
  const statusOrder = ["En viaje", "En preparación", "Finalizado"];
  const [trips, setTrips] = useState(tripsArray);
  const [filteredTrips, setFilteredTrips] = useState(tripsArray);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

  const sortTripsByPrice = () => {
    const sorted = [...trips].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return isAscending ? priceA - priceB : priceB - priceA;
    });
    setFilteredTrips(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const sortTripsByDate = () => {
    const sorted = [...trips].sort((a, b) => {
      return isAscending
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    setFilteredTrips(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const sortTripsByStatus = () => {
    const sorted = [...trips].sort((a, b) => {
      const statusA = statusOrder.indexOf(a.status);
      const statusB = statusOrder.indexOf(b.status);
      return isAscending ? statusA - statusB : statusB - statusA;
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
    <ClientLayout>
        <div className="flex justify-start border-b-2 w-full pl-20 pt-10 items-center gap-2">
          <section className="mb-8 flex items-center gap-x-6">
            <h2 className="text-black text-lg font-semibold uppercase">
              Resultados:
            </h2>
            <SortPill actionSort={sortTripsByPrice}>Precio</SortPill>
            <SortPill actionSort={sortTripsByDate}>Fecha</SortPill>
            <SortPill actionSort={sortTripsByStatus}>Estado</SortPill>
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
          <ReusableTable
            columns={["Viaje", "Fecha", "Precio", "Estado"]}
            data={filteredTrips}
            statusColumn={"status"}
          />
        </div>
    </ClientLayout>
  );
};

export default ClientReservations;
