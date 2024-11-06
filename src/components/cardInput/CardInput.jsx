import React, { useState, useRef, useEffect } from 'react';
import visaIcon from '../../icons/visa.png'; // Icono de Visa
import mastercardIcon from '../../icons/mastercard.png'; // Icono de MasterCard
import visaDebitIcon from '../../icons/visa.png'; // Icono de Visa Débito (opcional)
import cardIcon from '../../icons/credit-card.png';

const CardInput = ({ onCardChange, CNumber }) => {
    const [cardType, setCardType] = useState("");

    // Detectar el tipo de tarjeta
    const detectCardType = (number) => {
        const visaDebitBins = ["4026", "4175", "4508", "4844"];
        const visaRegex = /^4[0-9]{0,15}$/;
        const mastercardRegex = /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/;

        if (visaDebitBins.some((bin) => number.startsWith(bin))) return "visa-debit";
        if (visaRegex.test(number)) return "visa";
        if (mastercardRegex.test(number)) return "mastercard";
        return "";
    };

    useEffect(() => {
        setCardType(detectCardType(CNumber));  // Actualiza el tipo de tarjeta cuando el número cambia
    }, [CNumber]);

    const handleInputChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, "");  // Solo permitir números, sin espacios ni otros caracteres
        onCardChange(rawValue); // Se pasa el valor sin espacios al componente padre
    };

    // Formatear el número de tarjeta para mostrarlo en bloques de 4, pero sin modificar el valor real
    const formatCardNumber = (value) => {
        return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();  // Solo para mostrar el formato
    };

    const getCardIcon = () => {
        switch (cardType) {
            case "visa": return visaIcon;
            case "visa-debit": return visaDebitIcon;
            case "mastercard": return mastercardIcon;
            default: return null;
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Número de tarjeta"
                value={formatCardNumber(CNumber)}  // Formateamos solo para mostrar, sin afectar el valor real
                onChange={handleInputChange}
                maxLength={19}  // 16 dígitos más 3 espacios visibles
                className={`w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 bg-white text-black ${CNumber.length < 1 && CNumber.length != 0 ? "ring-red-600 ring-2" : ""}`}
            />
            {getCardIcon() ? (
                <img
                    src={getCardIcon()}
                    alt={cardType}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white"
                />
            ) : (
                <img
                    src={cardIcon}
                    alt={cardType}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white"
                />
            )}
        </div>
    );
};

export default CardInput;
