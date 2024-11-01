import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
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

import { AuthProvider } from "./components/context/AuthProvider";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import AdminListShips from "./pages/admin/AdminListShips";
import AdminHome from "./pages/admin/AdminHome";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <ClientHome />,
  },
  {
    path: "/resultados",
    element: <ClientSearchs />,
  },
  {
    path: "/mis-reservas",
    element: (
      <ProtectedRoute allowedRoles={["Client"]}>
        <ClientReservations isFavorites={false} />
      </ProtectedRoute>
    ),
  },
  {
    path: "/mis-favoritos",
    element: (
      <ProtectedRoute allowedRoles={["Client"]}>
        <ClientFavorites />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empresa/crear-viaje",
    element: (
      <ProtectedRoute allowedRoles={["Admin", "SuperAdmin"]}>
        <AdminCreateTrip />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empresa/crear-barco",
    element: (
      <ProtectedRoute allowedRoles={["Admin", "SuperAdmin"]}>
        <AdminCreateShip />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empresa/modificar-barco/:id",
    element: (
      <ProtectedRoute allowedRoles={["Admin", "SuperAdmin"]}>
        <AdminCreateShip editmode={true}/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/empresa/barcos",
    element: (
      <ProtectedRoute allowedRoles={["Admin, SuperAdmin"]}>
        <AdminListShips/>
      </ProtectedRoute>
    )
  },
  {
    path: "/empresa/home",
    element: (
      <ProtectedRoute allowedRoles={["Admin", "SuperAdmin"]}>
        <AdminHome/>
      </ProtectedRoute>
    )
  },
  {
    path: "/empresa/viajes",
    element: (
      <ProtectedRoute allowedRoles={["Admin", "SuperAdmin"]}>
        <AdminCreateTrip/>
      </ProtectedRoute>
    )
  }
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
