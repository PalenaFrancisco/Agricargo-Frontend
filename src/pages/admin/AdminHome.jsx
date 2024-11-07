// import { useEffect, useState } from "react"
import AdminLayout from "../../layout/AdminLayout"
import { useAuthContext } from "../../components/context/AuthProvider"
import ReusableTable from "../../components/tables/ReusableTable"
import useFetchData from "../../hooks/useFetchData/UseFetchData"


const AdminHome = () => {

   const { userProfile } = useAuthContext();
    const { data: reservations } = useFetchData(
      "https://localhost:7183/api/Reservation/companyReservations",
      userProfile.token
    );
    // const [reservations, setReservations] = useState(initialReservations || [])
    // useEffect(() => {
    //     fetch("https://localhost:7183/api/Reservation/companyReservations", {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${userProfile.token}`,
    //       },
    //     })
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error("Error en la solicitud: " + response.statusText);
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         setReservations(data);
    //         console.log(data);
    //       })
    //       .catch((error) => console.error("Error:", error)); 
    // }, [])


    const columns = [
        {key: "trip", value: "Viaje"},
        {key: "date", value: "Fecha de reserva"},
        {key: "price", value: "Precio"},
        {key: "grainQuantity", value: "Cantidad de granos"},
        {key: "departureDate", value: "Fecha de salida"},
        {key: "arriveDate", value: "Fecha de llegada"},
        {key: "status", value: "Estado"}
    ]

    return (
      <AdminLayout>
        <div className="px-20 w-full py-6">
          <h1 className="text-black text-3xl font-semibold mb-10">Reservas</h1>
          {reservations.length > 0 ? (
            <ReusableTable
              columns={columns}
              data={reservations}
              statusColumn={"status"}
            />
          ) : (
            <p className="text-black">No hay reservas</p>
          )}
        </div>
      </AdminLayout>
    );
}

export default AdminHome