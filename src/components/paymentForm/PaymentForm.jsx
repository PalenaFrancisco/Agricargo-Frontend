import { useEffect, useState } from "react";
import "./PaymentForm.css";
import CardInput from "../../components/cardInput/CardInput";
import LoadingButton from "../../components/loadingButton/LoadingButton";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Input from "../input/Input";

const PaymentForm = ({ data }) => {
    const [cardNumber, setCardNumber] = useState('');  // Aquí se inicializa el número de tarjeta
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { userProfile } = useAuthContext();
    const [name, setName] = useState("");
    const [expireDate, setExpireData] = useState("");
    const [cvv, setCvv] = useState("");
    const navigate = useNavigate();

    const {
        id,
        pricePerTon,
        capacity,
        departureDate,
        origin,
        destination,
        arriveDate,
        ship,
        grainAmount
    } = data;

    const calculateDays = () => {
        var days = (new Date(arriveDate) - new Date(departureDate)) / (1000 * 60 * 60 * 24);
        return days;
    }

    const calculatePrice = () => {
        var price = grainAmount * pricePerTon;
        return price
    }

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0'); 
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
    
        return `${day}/${month}/${year}`;
    }

    const cleanInputs = () =>{
        setCardNumber("")
        setCvv("")
        setExpireData("")
        setName("")
    }

    const handleCardChange = (number) => {
        setCardNumber(number);  // Aquí se actualiza el número de tarjeta cuando el usuario escribe
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`https://localhost:7183/api/Reservation/addReservation?tripId=${id}&amountReserved=${grainAmount}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${userProfile.token}`,
                },
            });

            if (!res.ok) {
                throw res;
            }

            if(res.ok){
                setIsLoading(false);
                setShowModal(true);
                cleanInputs();
                navigate("/mis-reservas");
            }

        } catch (error) {
            console.error("Error al Registrar:", error);
        }
    };
    useEffect(() => {
        cleanInputs();
    }, [])


    useEffect(() => {
        if (showModal) {
            const modalTimeout = setTimeout(() => {
                setShowModal(false);
                setCardNumber('');  // Resetea el número de tarjeta después de cerrar el modal
            }, 2000);

            return () => clearTimeout(modalTimeout);
        }
    }, [showModal]);

    return (
        <section className="flex justify-between gap-4">
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-lg font-semibold text-black">Compra realizada con éxito</h2>
                    </div>
                </div>
            )}
            <div className="w-[500px] bg-white shadow-xl rounded-lg p-6 space-y-4 mt-[200px]">
                <h2 className="text-black underline">Ingrese los datos de la tarjeta:</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <CardInput onCardChange={handleCardChange} CNumber={cardNumber} />  {/* Se pasa el valor del número de tarjeta */}
                    <Input setInputValue={(value) => setName(value)}>Nombre</Input>
                    <section className="flex justify-between">
                        <Input type="month" setInputValue={(value) => setExpireData(value)} inputclass={"w-[250px]"}>MM/YY</Input>
                        <Input type="number" setInputValue={(value) => setCvv(value)}>CVV</Input>
                    </section>
                    <LoadingButton isLoading={isLoading} type="submit">
                        Realizar compra
                    </LoadingButton>
                </form>

            </div>
            <div className="w-[500px] bg-white shadow-xl rounded-lg p-6 space-y-4 mt-[200px]">
                <h2 className="font-title text-black text-lg font-bold text-center mb-4 border-b pb-2">
                    Resumen
                </h2>
                <div className="space-y-4 text-neutral-950">
                    <div className="flex justify-between">
                        <span>Origen:</span>
                        <span>{origin}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Destino:</span>
                        <span>{destination}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tiempo de entrega:</span>
                        <span>{calculateDays()} dias</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fecha de salida:</span>
                        <span>{formatDate(departureDate)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fecha de llegada:</span>
                        <span>{formatDate(arriveDate)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Precio final:</span>
                        <span>{calculatePrice()}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentForm;
