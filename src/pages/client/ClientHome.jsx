import ClientLayout from "../../layout/ClientLayout";
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";
import SearchForm from "../../components/searchForm/SearchForm";
import SortPill from "../../components/sortPill/SortPill";

const ClientHome = () => {
  return (
    <>
      <ClientLayout className={"h-dvh"}>
        <section className="flex flex-col gap-6">
          <h1 className="text-black text-3xl font-semibold">Buscar viajes</h1>
          <SortPill>Precio</SortPill>
          <SearchForm isSearchMode={true}/>
        </section>
      </ClientLayout>
    </>
  );
};

export default ClientHome;
