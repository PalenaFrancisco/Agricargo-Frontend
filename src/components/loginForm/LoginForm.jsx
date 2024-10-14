import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";
import Input from "../input/Input";
import { useDataContext } from "../context/DataProvider";
import { useState } from "react";
import usersData from "../../../public/user.json";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setUserProfile } = useDataContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const authenticatedUser = usersData.find(
      (user) => user.username === email && user.password === password
    );

    console.log("Email:", email);
    console.log("Password:", password);

    console.log(usersData);

    if (authenticatedUser) {
      setUserProfile({
        username: authenticatedUser.username,
        role: authenticatedUser.role,
      });
      navigate(getRedirectPath(authenticatedUser.role));
      setEmail("");
      setPassword("");
    } else {
      console.log("Credenciales inválidas");
    }
  };


  const getRedirectPath = (role) => {
    switch (role) {
      case "Admin":
        return "/empresa/crear-viaje";
      case "Cliente":
        return "/cliente";
      case "Sys_Admin":
        return "/sysadmin/dashboard";
      default:
        return "/";
    }
  };
  return (
    <div className="flex justify-center items-center pt-32">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Iniciar Sesión
        </h2>
        <p className="text-center text-gray-400 mb-6">Estamos para ayudarte</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-400" />
            <Input
              setInputValue={(value) => setEmail(value)}
              type="email"
              inputclass={"w-full"}
            >
              Tu email
            </Input>
          </div>

          <div className="flex items-center gap-2">
            <FaLock className="text-gray-400" />
            <Input
              setInputValue={(value) => setPassword(value)}
              type="password"
              inputclass={"w-full"}
            >
              Contraseña
            </Input>
          </div>

          <Button
            className="w-full py-2 rounded-lg font-semibold"
            typeButton="submit"
          >
            Ingresar
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
            ¿Eres nuevo? Crea una cuenta{" "}
            <a href="/register" className="text-blue-500 font-semibold">
              Registrarse
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
