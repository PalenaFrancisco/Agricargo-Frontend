import "./App.css";
// import TripCardsList from "./components/tripCardsList/TripCardsList";
// import ReservationTable from "./components/tables/ReservationTable";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import ClientSearchResult from "./pages/client/ClientSearchResult";


function App() {
  // const testReservationsData = {
  //   cols: ["Viaje", "Fecha", "Precio", "Estado"],
  //   elements: [
  //     {
  //       id: "1",
  //       origin: "Buenos Aires",
  //       destination: "Montevideo",
  //       nextShipping: "2024-10-01",
  //       price: "10000",
  //       status: "Confirmado",
  //     },
  //     {
  //       id: "2",
  //       origin: "Rosario",
  //       destination: "Córdoba",
  //       nextShipping: "2024-10-03",
  //       price: "30000",
  //       status: "Pendiente",
  //     },
  //     {
  //       id: "3",
  //       origin: "Mendoza",
  //       destination: "San Juan",
  //       nextShipping: "2024-10-05",
  //       price: "140000",
  //       status: "Cancelado",
  //     },
  //   ],
  // };
  const trips = [
    {
      price: 100,
      destination: "Rosario",
      origin: "United States",
      shippingTime: 4,
      nextShipping: "2024-10-24", // Cambiado a yyyy-mm-dd
      businessName: "Massonnat Ships",
    },
    {
      price: 150,
      destination: "Buenos Aires",
      origin: "Brazil",
      shippingTime: 5,
      nextShipping: "2024-10-30", // Cambiado a yyyy-mm-dd
      businessName: "Atlantic Carriers",
    },
    {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "2024-11-05", // Cambiado a yyyy-mm-dd
      businessName: "Oceanic Lines",
    },
    {
      price: 300,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "2024-11-05", // Cambiado a yyyy-mm-dd
      businessName: "Oceanic Lines",
    },
    {
      price: 800,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "2024-11-05", // Cambiado a yyyy-mm-dd
      businessName: "Oceanic Lines",
    },
    {
      price: 200,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "2024-11-05", // Cambiado a yyyy-mm-dd
      businessName: "Oceanic Lines",
    },
    {
      price: 600,
      destination: "Montevideo",
      origin: "Canada",
      shippingTime: 6,
      nextShipping: "2024-11-05", // Cambiado a yyyy-mm-dd
      businessName: "Oceanic Lines",
    },
  ];


  return (
    <>
      <Router>
        {/* <ClientHome /> */}
        <ClientSearchResult data={trips}/>
        {/* <Login /> */}
        {/* <Register /> */}
      </Router>
    </>
  );
}

export default App;
