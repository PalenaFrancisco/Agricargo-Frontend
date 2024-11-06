import ClientLayout from "../../layout/ClientLayout";
import ReusableTable from "../../components/tables/ReusableTable";
import { useEffect, useState } from "react";
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

  // const [initialReservations, setInitialReservations] = useState([]);
  // const [trips, setTrips] = useState([]);
  // const [filteredTrips, setFilteredTrips] = useState(trips);
  const [isAscending, setIsAscending] = useState(true);
  const [filterActivate, setFilterActivate] = useState(false);

//   useEffect(() => {
//     fetch("https://localhost:7183/api/Reservation/clientReservations", {
//       method: "GET",
//       headers: {
//         "Accept": "application/json",
//         "Authorization": `Bearer ${userProfile.token}`
//       }
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Error en la solicitud: " + response.statusText);
//       }
//       return response.json(); 
//     })
//     .then((data) => {
//       setTrips(data);          
//       setFilteredTrips(data);  
//       console.log(data);       
//     })
//     .catch((error) => console.error("Error:", error)); 
// }, []); 

// const setData = () => {
//   if (initialReservations.length == 0){
//     setInitialReservations(reservations);
//   }
// }

  const sortTripsByPrice = () => {
    const sorted = [...reservations].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return isAscending ? priceA - priceB : priceB - priceA;
    });
    setFilteredTrips(sorted);
    setReservations(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const sortTripsByDate = () => {
    const sorted = [...reservations].sort((a, b) => {
      return isAscending
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    setFilteredTrips(sorted);
    setReservations(sorted);
    setIsAscending(!isAscending);
    setFilterActivate(true);
  };

  const sortTripsByStatus = () => {
    const sorted = [...reservations].sort((a, b) => {
      const statusA = statusOrder.indexOf(a.status);
      const statusB = statusOrder.indexOf(b.status);
      return isAscending ? statusA - statusB : statusB - statusA;
    });
    setFilteredTrips(sorted);
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
      { key: "status", value: "Estado" },
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
          <div className="px-20 w-full py-6">
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
