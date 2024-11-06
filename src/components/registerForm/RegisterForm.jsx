import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";
import Input from "../input/Input";
import { useAuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // Estado para manejar errores
    const role = "Client"

    const navigate = useNavigate();  // Definir navigate
    const cleanInputs = () => {
        setName("");
        setEmail("");
        setPassword("");
        setError("");  // Limpiar error al reiniciar los campos
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación simple para asegurarse de que los campos no estén vacíos
        if (!name || !email || !password) {
            setError("Por favor, llena todos los campos.");
            return;
        }

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
                throw new Error("Error en el registro. Inténtalo de nuevo.");
            }

            // Limpiar los campos y redirigir a la página de login
            cleanInputs();
            navigate("/login");
            console.log({
                name,
                email,
                password,
                role})

        } catch (error) {
            setError(error.message || "Error al registrar. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="flex justify-center items-center pt-24">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-900">Registrarse</h2>
                <p className="text-center text-gray-400 mb-6">Estamos para ayudarte</p>

                {error && (
                    <div className="text-red-500 text-center mb-4">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-2">
                        <FaUser className="text-gray-400" />
                        <Input inputclass={'w-full'} setInputValue={(value) => setName(value)}>Tu Nombre</Input>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-400" />
                        <Input type="email" inputclass={'w-full'} setInputValue={(value) => setEmail(value)}>Tu email</Input>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaLock className="text-gray-400" />
                        <Input type="password" inputclass={'w-full'} setInputValue={(value) => setPassword(value)}>Contraseña</Input>
                    </div>

                    <Button className="w-full py-2 rounded-lg font-semibold" typeButton={"submit"}>Crear cuenta</Button>

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
