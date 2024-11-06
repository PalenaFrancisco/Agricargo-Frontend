import ClientResult from "./ClientResult";
import ClientLayout from "../../layout/ClientLayout";
import { useAuthContext } from "../../components/context/AuthProvider";
import useFetchData from "../../hooks/useFetchData/UseFetchData";

const ClientFavorites = () => {
  const { userProfile } = useAuthContext();
   const { data: favorites, setData: setFavorites } = useFetchData(
     "https://localhost:7183/api/Favorite/getFavorites",
     userProfile.token
   );


  return (
    <ClientLayout>
      {favorites.length > 0 ? (
        <ClientResult
          data={favorites}
          setter={setFavorites}
          isFavorites={true}
        />
      ): <p className="text-black">No hay favoritos</p>}
    </ClientLayout>
  );
};

export default ClientFavorites;
