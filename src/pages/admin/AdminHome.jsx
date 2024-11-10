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
  

    const columns = [
        {key: "trip", value: "Viaje"},
        {key: "date", value: "Fecha de reserva"},
        {key: "price", value: "Precio"},
        {key: "grainQuantity", value: "Cantidad de granos"},
        {key: "departureDate", value: "Fecha de salida"},
        {key: "arriveDate", value: "Fecha de llegada"},
        {key: "status", value: "Estado"}
    ]

    const content =
      reservations.length > 0 ? (
        <ReusableTable
          columns={columns}
          data={reservations}
          statusColumn={"status"}
        />
      ) : (
        <p className="text-black">No hay reservas</p>
      );

    return (
      <AdminLayout>
        <div className="px-20 w-full py-6">
          <h1 className="text-black text-3xl font-semibold mb-10 dark:text-white">
            Reservas
          </h1>
          {content}
        </div>
      </AdminLayout>
    );
}

export default AdminHome