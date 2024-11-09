import ClientLayout from "../../layout/ClientLayout";
import ReusableTable from "../../components/tables/ReusableTable";
import { useState } from "react";
import SortSection from "../../components/sortSection/SortSection";
// import { fetchData } from "../../utils/fetchData";
import { useAuthContext } from "../../components/context/AuthProvider";
import useFetchData from "../../hooks/useFetchData/UseFetchData";

const ClientReservations = () => {
  
  const { userProfile } = useAuthContext();
  const { data: reservations, setData: setReservations } = useFetchData(
      "https://localhost:7183/api/Reservation/clientReservations",
      userProfile.token
    );

  const statusOrder = ["En viaje", "En preparación", "Finalizado"];

  const [initialReservations, setInitialReservations] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

const setData = () => {
  if (initialReservations.length == 0){
    setInitialReservations(reservations)
  }
}

  const sortTripsByPrice = () => {
    setData()
    const sorted = [...reservations].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return isAscending ? priceA - priceB : priceB - priceA;
    });
    // setFilteredTrips(sorted);
    setReservations(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const sortTripsByDate = () => {
    setData();
    const sorted = [...reservations].sort((a, b) => {
      return isAscending
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    // setFilteredTrips(sorted);
    setReservations(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const sortTripsByStatus = () => {
    setData();
    const sorted = [...reservations].sort((a, b) => {
      const statusA = statusOrder.indexOf(a.status);
      const statusB = statusOrder.indexOf(b.status);
      return isAscending ? statusA - statusB : statusB - statusA;
    });
    // setFilteredTrips(sorted);
    setReservations(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const resetFilters = () => {
    // setFilteredTrips(trips);
    setReservations(initialReservations)
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
      { key: "departureDate", value: "Fecha de salida" },
      { key: "arriveDate", value: "Fecha de llegada" },
      { key: "status", value: "Estado" }
    ];

  return (
    <ClientLayout>
      {reservations.length > 0 ? (
        <>
          <SortSection
            title={"Reservas:"}
            sortOptions={sortOptions}
            filterActivate={filterActivate}
            resetFilters={resetFilters}
          />
          <div className="md:px-20 px-8 w-full py-6">
            <ReusableTable
              columns={columns}
              data={reservations}
              statusColumn={"status"}
            />
          </div>
        </>
      ) : (
        <p className="text-black">No hay reservas</p>
      )}
    </ClientLayout>
  );
};

export default ClientReservations;
