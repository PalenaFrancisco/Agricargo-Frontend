import { useEffect, useState } from "react";
import ClientResult from "./ClientResult";

import ClientLayout from "../../layout/ClientLayout";
import { useAuthContext } from "../../components/context/AuthProvider";
import useFetchData from "../../hooks/useFetchData/UseFetchData";

const ClientFavorites = () => {
  const { userProfile } = useAuthContext();
   const { data: favorites } = useFetchData(
     "https://localhost:7183/api/Favorite/getFavorites",
     userProfile.token
   );
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);


  return (
    <ClientLayout>
      <ClientResult
        data={favorites}
        resetData={favorites}
        setter={setFilteredTrips}
        isFavorites={true}
      />
    </ClientLayout>
  );
};

export default ClientFavorites;
