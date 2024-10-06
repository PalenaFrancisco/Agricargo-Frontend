import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";
import Input from "../input/Input";

const RegisterForm = () => {
    return (
        <div className="flex justify-center items-center pt-24">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-900">Registrarse</h2>
                <p className="text-center text-gray-400 mb-6">Estamos para ayudarte</p>

                <form className="space-y-4">
                    <div className="flex items-center gap-2">
                        <FaUser className="text-gray-400" />
                        <Input inputclass={'w-full'}>Tu Nombre</Input>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-400" />
                        <Input type="email" inputclass={'w-full'}>Tu email</Input>
                    </div>

                    
                    <div className="flex items-center gap-2">
                        <FaLock className="text-gray-400" />
                        <Input type="password" inputclass={'w-full'}>Contraseña</Input>
                    </div>

                    
                    <Button className="w-full py-2 rounded-lg font-semibold">Crear cuenta</Button>

                    
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
                            Iniciar Sesion
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
