import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ children, inputclass, type = "text" }) => {
    const [value, setValue] = useState(type === "number" ? 0 : "");
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`relative ${inputclass} `}>
            <input
                type={type === "password" && showPassword ? "text" : type}
                id={`floating_${children}`}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 dark:focus:border-blue-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                value={value}
            />
            <label
                htmlFor={`floating_${children}`}
                className="absolute text-sm text-black bg-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
                {children}
            </label>

            {/* Mostrar ícono solo si el tipo es "password" */}
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            )}
        </div>
    );
};

export default Input;
