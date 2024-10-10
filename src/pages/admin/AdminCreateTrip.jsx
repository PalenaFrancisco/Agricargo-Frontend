import ReusableTable from "../../components/tables/ReusableTable";
import AdminLayout from "../../layout/AdminLayout";

const AdminCreateTrip = () => {
  const tripsData = [
    {
      id: 1,
      Origen: "Buenos Aires",
      Destino: "Rosario",
      "Fecha de salida": "2024-10-15",
      "Fecha de llegada": "2024-10-16",
    },
    {
      id: 2,
      Origen: "Córdoba",
      Destino: "Mendoza",
      "Fecha de salida": "2024-10-20",
      "Fecha de llegada": "2024-10-21",
    },
    {
      id: 3,
      Origen: "La Plata",
      Destino: "Mar del Plata",
      "Fecha de salida": "2024-11-01",
      "Fecha de llegada": "2024-11-02",
    },
  ];

  const actions = [
    {
      label: "Editar",
      handler: (item) => alert(`Editando viaje con ID: ${item.id}`),
      className: "bg-blue-500 hover:bg-blue-700", 
    },
    {
      label: "Eliminar",
      handler: (item) => alert(`Eliminando viaje con ID: ${item.id}`),
      className: "bg-red-500 hover:bg-red-700", 
    },
  ];
  return (
    <AdminLayout>
      <section className="w-full px-20 flex flex-col gap-6 pt-10">
        <h1 className="text-black text-3xl font-semibold">Crear viaje</h1>
        <ReusableTable
          columns={[
            "Origen",
            "Destino",
            "Fecha de salida",
            "Fecha de llegada"
          ]}
          data={tripsData}
          actions={actions}
        />
      </section>
    </AdminLayout>
  );
};

export default AdminCreateTrip;
