import ClientLayout from "../../layout/ClientLayout";
import SearchForm from "../../components/searchForm/SearchForm";
import { useState } from "react";
import ClientResult from "./ClientResult";
import { useAuthContext } from "../../components/context/AuthProvider";
import useFetchData from "../../hooks/useFetchData/UseFetchData";

const ClientHome = () => {
  const { userProfile } = useAuthContext();
  const [message, setMessage] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultFiltered, setSearchResultFiltered] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const { data: favorites = [] } = useFetchData( 
    "https://localhost:7183/api/Favorite/getFavorites",
    userProfile.token
  );

  const handleSearch = async (inputValues) => {
    setIsLoading(true);
    try {
      const query = new URLSearchParams(inputValues).toString();
      const response = await fetch(
        `https://localhost:7183/Trip/getTrips?${query}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userProfile.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const data = await response.json();

      const result = (data.trips || []).map((trip) => { 
        const favorite = favorites?.find((fav) => fav.id === trip.id); 
        if (favorite) {
          trip.favId = favorite.favId;
        }
        return trip;
      });

      setSearchResult(result);
      setSearchResultFiltered(result);
      setMessage(data.message);
      setHasSearched(true);
    } catch (error) {
      console.error("Error de conexión:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const content = isLoading ? ( 
    <div className="flex justify-center items-center gap-4 mt-10">
      <p className="text-black dark:text-white">Buscando viajes...</p>
      <div className="w-10 h-10 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
    </div>
  ) : searchResult?.length > 0 ? ( 
    <>
      <p className="text-black mt-20 dark:text-white">{message}</p>
      <ClientResult
        data={searchResultFiltered}
        resetData={searchResult}
        setter={setSearchResultFiltered}
      />
    </>
  ) : hasSearched ? (
    <p className="text-black dark:text-white mt-10">No se encontraron viajes</p>
  ) : null;

  return (
    <ClientLayout className={""}>
      <section className="flex flex-col gap-6 pt-10">
        <h1 className="text-black text-3xl font-semibold dark:text-white">
          Buscar viajes
        </h1>
        <SearchForm isSearchMode={true} searchSetter={handleSearch} />
      </section>
      {content}
    </ClientLayout>
  );
};

export default ClientHome;
