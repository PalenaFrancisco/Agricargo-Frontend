import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";
import Input from "../input/Input";
// import { useAuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});  // Estado para manejar errores
    const [registerError, setRegisterError] = useState("")
    const role = "Client"
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();  // Definir navigate
    const cleanInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
        setErrors({});  // Limpiar error al reiniciar los campos
        setRegisterError("");
    };

    const validateFields = () => {
        const newErrors = {};

        if (!name) newErrors.name = "Nombre es requerido"
        if (!email) newErrors.email = "Email es requerido"
        if (!password) newErrors.password = "Contraseña es requerida"

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFields()) return;

        setIsLoading(true)

        try {
            const res = await fetch("https://localhost:7183/api/Auth/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role
                }),
            });

            if (!res.ok) {
                setRegisterError("Error en el registro. Inténtalo de nuevo.")
                throw new Error("Error en el registro. Inténtalo de nuevo.");
            }

            // Limpiar los campos y redirigir a la página de login
            cleanInputs();
            navigate("/login");
        } catch (error) {
            setRegisterError("Cuenta con email ya existente")
            setIsLoading(false);
            // setError(error.message || );
        }
    };

    return (
        <div className="flex justify-center items-center pt-10">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-900">Registrarse</h2>
                <p className="text-center text-gray-400 mb-6">Estamos para ayudarte</p>

                {registerError && (
                    <div className="text-red-500 text-center mb-4">
                        {registerError}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-2">
                        <FaUser className="text-gray-400" />
                        <Input inputclass={'w-full'} setInputValue={(value) => setName(value)}
                        inputstyle={errors.name ? "border-red-500" : ""}>Tu Nombre</Input>
                    </div>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-400" />
                        <Input type="email" inputclass={'w-full'} setInputValue={(value) => setEmail(value)}
                        inputstyle={errors.email ? "border-red-500" : ""}>Tu email</Input>
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <div className="flex items-center gap-2">
                        <FaLock className="text-gray-400" />
                        <Input type="password" inputclass={'w-full'} setInputValue={(value) => setPassword(value)}
                        inputstyle={errors.password ? "border-red-500" : ""}>Contraseña</Input>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <Button
                        className="w-full py-2 rounded-lg font-semibold "
                        typeButton="submit"
                        disabled={isLoading} // Desactivar el botón mientras cargando
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 ml-32 border-4 border-t-4 border-gray-200 rounded-full border-t-blue-600 animate-spin"></div>
                        ) : (
                            "Crear cuenta"
                        )}
                    </Button>

                    <div className="flex items-center justify-center my-4">
                        <span className="border-t flex-grow"></span>
                        <span className="mx-2 text-gray-400">o</span>
                        <span className="border-t flex-grow"></span>
                    </div>

                    <button
                        type="button"
                        className="flex items-center justify-center w-full border py-2 rounded-lg text-sm text-gray-900"
                    >
                        <FcGoogle className="mr-2" />
                        Continúa con Google
                    </button>

                    <p className="text-center text-gray-500 mt-6">
                        ¿Ya tienes una cuenta?{" "}
                        <a href="/login" className="text-blue-500 font-semibold">
                            Iniciar Sesión
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
