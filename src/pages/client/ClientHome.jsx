import ClientLayout from "../../layout/ClientLayout";
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";
import SearchForm from "../../components/searchForm/SearchForm";

const ClientHome = () => {
  return (
    <>
      <ClientLayout>
        <section className="flex flex-col gap-6">
          <h1 className="text-black text-3xl font-semibold">Buscar viajes</h1>
          <SearchForm isSearchMode={true} />
         
        </section>
      </ClientLayout>
    </>
  );
};

export default ClientHome;
