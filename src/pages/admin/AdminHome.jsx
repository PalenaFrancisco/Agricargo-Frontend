import { useEffect, useState } from "react"
import AdminLayout from "../../layout/AdminLayout"
import { useAuthContext } from "../../components/context/AuthProvider"
import ReusableTable from "../../components/tables/ReusableTable"


const AdminHome = () => {

    const [reservations, setReservations] = useState([])
    const {userProfile} = useAuthContext();

    useEffect(() => {
        fetch("https://localhost:7183/api/Reservation/companyReservations", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userProfile.token}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error en la solicitud: " + response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            setReservations(data);
            console.log(data);
          })
          .catch((error) => console.error("Error:", error)); 
    }, [])


    const columns = [
        {key: "trip", value: "Viaje"},
        {key: "date", value: "Fecha de reserva"},
        {key: "price", value: "Precio"},
        {key: "grainQuantity", value: "Cantidad de granos"},
        {key: "status", value: "Estado"}
    ]

    return (
      <AdminLayout>
        <div className="px-20 w-full py-6">
          <h1 className="text-black text-3xl font-semibold mb-10">Reservas</h1>
          <ReusableTable
            columns={columns}
            data={reservations}
            statusColumn={"status"}
          />
        </div>
      </AdminLayout>
    );
}

export default AdminHome