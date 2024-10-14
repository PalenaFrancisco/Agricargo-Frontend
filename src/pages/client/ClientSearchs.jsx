import { useState } from "react";
import ClientResult from "./ClientResult";
import { useDataContext } from "../../components/context/DataProvider";

const ClientSearchs = () => {
  const { results } = useDataContext();
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
