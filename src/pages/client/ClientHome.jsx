import ClientLayout from "../../layout/ClientLayout";
import SearchForm from "../../components/searchForm/SearchForm";
import { useState } from "react";
import { fetchData } from "../../utils/fetchData";
import ClientResult from "./ClientResult";

const ClientHome = () => {

  const [searchResult, setSearchResult] = useState();
  const [searchResultFiltered, setSearchResultFiltered] = useState();

  const handleSearch = (inputValues) => {
    fetchData("/trips.json")
      .then((result) => {
        const filteredResult = result.filter(
          (result) =>
            result.origin === inputValues.origin &&
            result.destination === inputValues.destination &&
            result.quantity >= inputValues.quantity
        );
        setSearchResult(filteredResult);
        setSearchResultFiltered(filteredResult);
        console.log(filteredResult);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <ClientLayout className={"h-dvh"}>
        <section className="flex flex-col gap-6 pt-10">
          <h1 className="text-black text-3xl font-semibold">Buscar viajes</h1>
          <SearchForm isSearchMode={true} searchSetter={handleSearch} />
        </section>
        {searchResult && (
          <ClientResult
            data={searchResultFiltered}
            resetData={searchResult}
            setter={setSearchResultFiltered}
            isFavorites={false}
          />
        )}
      </ClientLayout>
    </>
  );
};

export default ClientHome;
