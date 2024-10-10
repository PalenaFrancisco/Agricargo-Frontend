import "./App.css";
// import TripCardsList from "./components/tripCardsList/TripCardsList";
// import ReservationTable from "./components/tables/ReservationTable";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import ClientReservations from "./pages/client/ClientReservations";
import ClientHome from "./pages/client/ClientHome";
import ClientResult from "./pages/client/ClientResult";
import Login from "./pages/Login Register/Login";
import Register from "./pages/Login Register/Register";
import AdminCreateShip from "./pages/admin/AdminCreateShip";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/cliente/mis-reservas"
            element={<ClientReservations />}
          ></Route>
          <Route path="/" element={
            // <ClientHome />
            <AdminCreateShip />
            }></Route>
          <Route
            path="/cliente/mis-favoritos"
            element={<ClientResult isFavorites={false}/>}
          ></Route>
          <Route
            path="/login"
            element={<Login/>}></Route>
          <Route
            path="/register"
            element={<Register/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
