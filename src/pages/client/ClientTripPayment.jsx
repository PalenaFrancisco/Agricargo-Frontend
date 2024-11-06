import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import PaymentForm from "../../components/paymentForm/PaymentForm"
import ClientLayout from "../../layout/ClientLayout";

const ClientTripPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {trip} = location.state || {};

  useEffect(() => {
    if (!trip) {
      const timeout = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [trip, navigate]);

  if (!trip) {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">Información no encontrada</h5>
        <p className="text-gray-600">No se encontraron los datos del viaje.</p>
      </div>
    );
  }

  return (
    <ClientLayout buttonBack={true}>
      <PaymentForm data={trip}/>
    </ClientLayout>
  )
}

export default ClientTripPayment