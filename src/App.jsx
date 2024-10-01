import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/Input";
import Sidebar from "./components/sidebar/Sidebar";
import ReservationTable from "./components/tables/ReservationTable";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import { BrowserRouter as Router, Routes} from "react-router-dom";

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

  return (
    <>
      <Router>
        <Sidebar userType={"cliente"}/>
        <Routes>

        </Routes>
        <h1 className="text-red-500">Holaaaaa</h1>
        <Input inputclass="mb-4">Email</Input>
        <Input inputclass="mb-4">Password</Input>
        <Button>Enviar</Button>
        <ReservationTable data={testReservationsData.elements} />
      </Router>
    </>
  );
}

export default App;
