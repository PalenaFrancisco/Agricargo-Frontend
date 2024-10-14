import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
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
import Login from "./pages/Login Register/Login";
import Register from "./pages/Login Register/Register";
import AdminCreateShip from "./pages/admin/AdminCreateShip";
import AdminCreateTrip from "./pages/admin/AdminCreateTrip";
import ClientFavorites from "./pages/client/ClientFavorites";
import ClientSearchs from "./pages/client/ClientSearchs";
import { useDataContext } from "./components/context/DataProvider";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userProfile } = useDataContext();

  if (!userProfile) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userProfile.role)) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route
            path="/cliente"
            element={
              <ProtectedRoute allowedRoles={["Cliente"]}>
                <ClientHome />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/cliente/resultados"
            element={
              <ProtectedRoute allowedRoles={["Cliente"]}>
                <ClientSearchs />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/cliente/mis-reservas"
            element={
              <ProtectedRoute allowedRoles={["Cliente"]}>
                <ClientReservations isFavorites={false} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/cliente/mis-favoritos"
            element={
              <ProtectedRoute allowedRoles={["Cliente"]}>
                <ClientFavorites />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/empresa/crear-viaje"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Sys_Admin"]}>
                <AdminCreateTrip />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/empresa/crear-barco"
            element={
              <ProtectedRoute allowedRoles={["Admin", "Sys_Admin"]}>
                <AdminCreateShip />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
