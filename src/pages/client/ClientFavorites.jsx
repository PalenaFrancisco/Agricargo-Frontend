import { useEffect, useState } from "react";
import ClientResult from "./ClientResult";
import { fetchData } from "../../utils/fetchData";

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
  return <ClientResult data={filteredTrips} resetData={trips} setter={setFilteredTrips}/>;
};

export default ClientFavorites;
