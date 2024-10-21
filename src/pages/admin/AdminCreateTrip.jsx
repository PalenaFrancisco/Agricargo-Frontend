import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import ReusableTable from "../../components/tables/ReusableTable";
import AdminLayout from "../../layout/AdminLayout";
import { fetchData } from "../../utils/fetchData";

const AdminCreateTrip = () => {
  const [trips, setTrips] = useState([]);
  const [typeShip, setTypeShip] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [price, setPrice] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentTripId, setCurrentTripId] = useState(null);

  useEffect(() => {
    fetchData("/trips.json")
      .then((response) => setTrips(response))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: currentTripId || trips.length + 1, // Genera un ID
      origin,
      destination,
      departureDate,
      arrivalDate,
      price
    };

    if (editMode) {
      setTrips(
        trips.map((trip) => (trip.id === currentTripId ? newTrip : trip))
      );
    } else {
      setTrips([...trips, newTrip]);
    }

    resetForm();
  };

  const resetForm = () => {
    setOrigin("");
    setDestination("");
    setDepartureDate("");
    setArrivalDate("");
    setTypeShip("");
    setPrice("");
    setCurrentTripId(null);
    setEditMode(false);
  };

  const removeTrip = (item) => {
    const filteredTrips = trips.filter((trips) => trips.id != item.id);
    setTrips(filteredTrips);
  };

  const editTrip = (item) => {
    setOrigin(item.origin);
    setDestination(item.destination);
    setDepartureDate(item.departureDate);
    setArrivalDate(item.arrivalDate);
    setTypeShip(item.typeShip);
    setCurrentTripId(item.id);
    setPrice(item.price);
    setEditMode(true);
  };

  const actions = [
    {
      label: "Editar",
      handler: editTrip,
      className: "bg-blue-500 hover:bg-blue-700",
    },
    {
      label: "Eliminar",
      handler: removeTrip,
      className: "bg-red-500 hover:bg-red-700",
    },
  ];

  const columns = [
    { key: "origin", value: "Origen" },
    { key: "destination", value: "Destino" },
    { key: "departureDate", value: "Fecha de salida" },
    { key: "arrivalDate", value: "Fecha de llegada" },
  ];

  return (
    <AdminLayout>
      <section className="w-full px-20 flex flex-col gap-6 pt-10">
        <h1 className="text-black text-3xl font-semibold">Crear viaje</h1>

        <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="max-w-sm mb-10">
            <label
              htmlFor="ships"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccione un barco
            </label>
            <select
              defaultValue={typeShip}
              onChange={(e) => setTypeShip(e.target.value)}
              id="ships"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled defaultValue={""}>
                Tipo de barco
              </option>
              <option defaultValue="granelero">Granelero</option>
              <option defaultValue="fluvial">Fluvial</option>
              <option defaultValue="otro">Otro</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-black">Datos del viaje</h2>

            <div className="w-full flex gap-x-4">
              <Input value={origin} setInputValue={setOrigin}>
                Origen
              </Input>
              <Input value={destination} setInputValue={setDestination}>
                Destino
              </Input>
              <Input
                value={departureDate}
                type="date"
                setInputValue={setDepartureDate}
              >
                Fecha de salida
              </Input>
              <Input
                value={arrivalDate}
                type="date"
                setInputValue={setArrivalDate}
              >
                Fecha de llegada
              </Input>
              <Input
                value={price}
                type="number"
                setInputValue={setPrice}
              >
                Precio del viaje
              </Input>
              {editMode && (
                <Button
                  typeButton="button"
                  className={"w-fit px-5 rounded-lg"}
                  actionClick={resetForm}
                >
                  Fin de modo edición
                </Button>
              )}
            </div>
          </div>
          <Button typeButton="submit" className={"w-fit px-5 rounded-lg"}>
            {editMode ? "Guardar cambios" : "Agregar viaje"}
          </Button>
        </form>

        <ReusableTable columns={columns} data={trips} actions={actions} />
      </section>
    </AdminLayout>
  );
};

export default AdminCreateTrip;
