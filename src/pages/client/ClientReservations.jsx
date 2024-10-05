import { RxCross2 } from "react-icons/rx";
import Button from "../../components/button/Button";
import SortPill from "../../components/sortPill/SortPill";
import ClientLayout from "../../layout/ClientLayout";
import ReusableTable from "../../components/tables/ReusableTable";
import { useState } from "react";
import SortSection from "../../components/sortSection/SortSection";

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
      return isAscending ? statusA - sBstatu : statusB - statusA;
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
    { label: "Estado", actionSort: sortTripsByStatus },
  ];

  return (
    <ClientLayout>
      <SortSection
        title={"Reservas:"}
        sortOptions={sortOptions}
        filterActivate={filterActivate}
        resetFilters={resetFilters}
      />
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
