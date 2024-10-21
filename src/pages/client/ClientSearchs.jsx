import { useState } from "react";
import ClientResult from "./ClientResult";
import { useAuthContext } from "../../components/context/AuthProvider";

const ClientSearchs = () => {
  const { results } = useAuthContext();
  const [filteredTrips, setFilteredTrips] = useState(results);

  return (
    <ClientResult
      data={filteredTrips}
      resetData={results}
      setter={setFilteredTrips}
      isFavorites={false}
    />
  );
};

export default ClientSearchs;
