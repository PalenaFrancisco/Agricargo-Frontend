import ClientLayout from "../../layout/ClientLayout";
import ReusableTable from "../../components/tables/ReusableTable";
import { useEffect, useState } from "react";
import SortSection from "../../components/sortSection/SortSection";
import { fetchData } from "../../utils/fetchData";

const ClientReservations = () => {

  const statusOrder = ["En viaje", "En preparación", "Finalizado"];

  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

  useEffect(() => {
    fetchData("/reservations.json")
      .then((response) => {
        setTrips(response);
        setFilteredTrips(response);
      })
      .catch((error) => console.error(error));
  }, []);

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

  const sortOptions = [
    { label: "Precio", actionSort: sortTripsByPrice },
    { label: "Fecha", actionSort: sortTripsByDate },
    { label: "Estado", actionSort: sortTripsByStatus },
  ];

    const columns = [
      { key: "trip", value: "Viaje" },
      { key: "date", value: "Fecha" },
      { key: "price", value: "Precio" },
      { key: "status", value: "Estado" },
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
          columns={columns}
          data={filteredTrips}
          statusColumn={"status"}
        />
      </div>
    </ClientLayout>
  );
};

export default ClientReservations;
