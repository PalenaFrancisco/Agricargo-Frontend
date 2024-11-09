import { useEffect, useState } from "react";
import ClientLayout from "../../layout/ClientLayout";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const ClientTripDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [grainAmount, setGrainAmount] = useState(null);
  // const [error, setError] = useState(false);


  useEffect(() => {
    if (!location.state || !location.state.trip) {
      navigate("/");
      return; 
    }
}, []);

if (!location.state || !location.state.trip) return null;

const {
  id,
  pricePerTon,
  capacity,
  departureDate,
  origin,
  destination,
  arriveDate,
  ship
} = location.state.trip;


  const handleCheckout = () => {
    navigate(`/resultado/${id}/pago`, {
      state: {
        trip: {
          id,
          pricePerTon,
          capacity,
          departureDate,
          origin,
          destination,
          arriveDate,
          ship,
          grainAmount
        },
      },
    });
  };

  return (
    <ClientLayout buttonBack={true}>
      <div className="w-full max-w-2xl py-8 px-20 m-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Detalles del viaje
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {pricePerTon}
          </span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /ton
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Capacidad: {capacity} tons
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Fecha de partida: {departureDate}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Fecha de llegada: {arriveDate}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Origen: {origin}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Destino: {destination}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Barco: {ship.typeShip}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Patente: {ship.shipPlate}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Capitán: {ship.captain}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Compañía: {ship.company.companyName}
            </span>
          </li>
          <li className="flex">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Dueño/a: {ship.company.name}
            </span>
          </li>
        </ul>
        <div className="mb-10">
          <h3 className="text-gray-950 dark:text-white">
            Confirme la cantidad que quiere llevar (en toneladas)
          </h3>
          <Input type="number" value={grainAmount} setInputValue={setGrainAmount} />
        </div>
        <Button actionClick={handleCheckout}>Seleccionar viaje</Button>
      </div>
    </ClientLayout>
  );
};

export default ClientTripDetail;
