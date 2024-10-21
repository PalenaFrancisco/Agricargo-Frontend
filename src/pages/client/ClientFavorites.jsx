import { useEffect, useState } from "react";
import ClientResult from "./ClientResult";
import { fetchData } from "../../utils/fetchData";
import ClientLayout from "../../layout/ClientLayout";

const ClientFavorites = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    fetchData("/favTrips.json")
      .then((response) => {
        setTrips(response);
        setFilteredTrips(response);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <ClientLayout>
      <ClientResult
        data={filteredTrips}
        resetData={trips}
        setter={setFilteredTrips}
      />
    </ClientLayout>
  );
};

export default ClientFavorites;
