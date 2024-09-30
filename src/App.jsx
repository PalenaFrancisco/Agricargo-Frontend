import './App.css'
import Button from './components/button/Button'
import Input from './components/input/Input'
import ReservationTable from './components/tables/ReservationTable'
import TripCardsList from './tripCardsList/TripCardsList'

function App() {

  const testReservationsData = {
    cols: ["Viaje", "Fecha", "Precio", "Estado"],
    elements: [
      {
        id: "1",
        origin: "Buenos Aires",
        destination: "Montevideo",
        date: "2024-10-01",
        price: "10000",
        status: "Confirmado",
      },
      {
        id: "2",
        origin: "Rosario",
        destination: "Córdoba",
        date: "2024-10-03",
        price: "30000",
        status: "Pendiente",
      },
      {
        id: "3",
        origin: "Mendoza",
        destination: "San Juan",
        date: "2024-10-05",
        price: "140000",
        status: "Cancelado",
      },
    ],
  };
  const trips = [
    {
      price: 100,
      destination: "Rosario",
      origin: "United States",
      shippingTime: 4,
      nextShipping: "24/10/2024",
      businessName: "Massonnat Ships",
    },
    {
      price: 150,
      destination: "Buenos Aires",
      origin: "Brazil",
      shippingTime: 5,
      nextShipping: "30/10/2024",
      businessName: "Atlantic Carriers",
    },
    {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "05/11/2024",
      businessName: "Oceanic Lines",
    }, {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "05/11/2024",
      businessName: "Oceanic Lines",
    }, {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "05/11/2024",
      businessName: "Oceanic Lines",
    }, {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "05/11/2024",
      businessName: "Oceanic Lines",
    }, {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "05/11/2024",
      businessName: "Oceanic Lines",
    },
  ];


  return (
    <>
      <h1 className="text-red-500">Holaaaaa</h1>
      <Input inputclass="mb-4">Email</Input>
      <Input inputclass="mb-4">Password</Input>
      <Button>Enviar</Button>
      <ReservationTable
        data={testReservationsData.elements}
      />
      <br />
      <TripCardsList trips={trips} />
    </>
  );
}

export default App
