// SearchResults.js
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import ClientResult from "./ClientResult";
import { useDataContext } from "../../components/context/DataProvider";

const ClientSearch = () => {
  const [trips, setTrips] = useState([]);
  const { inputValues } = useDataContext();

  useEffect(() => {
    const endpoint = "/trips.json";
    fetchData(endpoint)
      .then((response) => {
        const filt = response.filter((r) => {
          return (
            r.origin === inputValues.origin &&
            r.destination === inputValues.destination
          );
        });
        setTrips(filt);
      })
      .catch((error) => console.error(error));
  }, [inputValues]); // Dependencia en inputValues

  return <ClientResult trips={trips} isFavorites={false} />;
};

export default ClientSearch;
