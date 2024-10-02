import ClientLayout from "../../layout/ClientLayout";
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";
import SearchForm from "../../components/searchForm/SearchForm";
import ReusableTable from "../../components/tables/ReusableTable";

const Home = () => {
  const reservasData = [
    {
      viaje: "Córdoba - Santa Fe",
      fecha: "12/10/2024",
      precio: "$1.200.000",
      estado: "Finalizado",
    },
    {
      viaje: "Córdoba - Santa Fe",
      fecha: "12/10/2024",
      precio: "$1.200.000",
      estado: "En viaje",
    },
  ];
  const viajesData = [
    {
      salida: "Puerto Santa Fe",
      llegada: "Puerto Santa Fe",
      "fecha salida": "12/10/2024",
      "fecha llegada": "14/10/2024",
    },
  ];

  const viajesActions = [
    {
      label: "Editar",
      className: "bg-blue-500",
      handler: (item) => console.log("Edit", item),
    },
    {
      label: "Eliminar",
      className: "bg-red-500",
      handler: (item) => console.log("Delete", item),
    },
  ];
  const barcosData = [
    { barco: "Barco 1", tonelaje: "3 Ton", estado: "En viaje" },
    { barco: "Barco 1", tonelaje: "3 Ton", estado: "En viaje" },
    { barco: "Barco 1", tonelaje: "3 Ton", estado: "En viaje" },
  ];

  const barcosActions = [
    {
      label: "Editar",
      className: "bg-blue-500",
      handler: (item) => console.log("Edit", item),
    },
    {
      label: "Eliminar",
      className: "bg-red-500",
      handler: (item) => console.log("Delete", item),
    },
  ];
  return (
    <>
      <ClientLayout>
        <section className="flex flex-col gap-6">
          <h1 className="text-black text-3xl font-semibold">Buscar viajes</h1>
          <SearchForm isSearchMode={true} />
          <ReusableTable
            columns={["Viaje", "Fecha", "Precio", "Estado"]}
            data={reservasData}
            statusColumn="estado"
          />
          <ReusableTable
            columns={[
              "Salida",
              "Llegada",
              "Fecha Salida",
              "Fecha Llegada",
              "Acciones",
            ]}
            data={viajesData}
            actions={viajesActions}
          />
          <ReusableTable
            columns={["Barco", "Toneladas Máximas", "Estado", "Acciones"]}
            data={barcosData}
            statusColumn="estado"
            actions={barcosActions}
          />
          ; ; ;
        </section>
      </ClientLayout>
    </>
  );
};

export default Home;
