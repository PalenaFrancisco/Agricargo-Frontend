import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";
import Input from "../input/Input";
import { useAuthContext } from "../context/AuthProvider";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { handleLogin, userProfile } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(""); // Estado para error de inicio de sesión
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const validateFields = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email es requerido";
    if (!password) newErrors.password = "Contraseña es requerida";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    setIsLoading(true);

    try {
      const res = await fetch("https://localhost:7183/api/Auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setLoginError("El email o la contraseña no son correctos");
        setIsLoading(false);
        return;
      }

      const data = await res.text();
      await handleLogin(email, data);

      setEmail("");
      setPassword("");
      setErrors({});
      setLoginError("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setLoginError("Ocurrió un error al intentar iniciar sesión");
      setIsLoading(false);
    }
  };

  const getRedirectPath = (role) => {
    switch (role) {
      case "Admin":
        return "/empresa/home";
      case "Client":
        return "/";
      case "SuperAdmin":
        return "/sysadmin";
      default:
        return "/";
    }
  };

  useEffect(() => {
    if (userProfile && userProfile.role) {
      const redirectPath = getRedirectPath(userProfile.role);
      navigate(redirectPath);
    }
  }, [userProfile, navigate]);

  return (
    <div className="flex justify-center items-center pt-20 dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Iniciar Sesión
        </h2>
        <p className="text-center text-gray-400 mb-6">Estamos para ayudarte</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {loginError && (
            <p className="text-red-500 text-center mb-4">{loginError}</p>
          )}

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-400" />
            <Input
              setInputValue={(value) => setEmail(value)}
              type="email"
              inputclass={`w-full `}
              inputstyle={errors.email ? "border-red-500" : ""}
            >
              Tu email
            </Input>
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <div className="flex items-center gap-2">
            <FaLock className="text-gray-400" />
            <Input
              setInputValue={(value) => setPassword(value)}
              type="password"
              inputclass={`w-full`}
              inputstyle={errors.password ? "border-red-500" : ""}
            >
              Contraseña
            </Input>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <Button
            className="w-full py-2 rounded-lg font-semibold "
            typeButton="submit"
            disabled={isLoading} // Desactivar el botón mientras cargando
          >
            {isLoading ? (
              <div className="w-6 h-6 ml-32 border-4 border-t-4 border-gray-200 rounded-full border-t-blue-600 animate-spin"></div>
            ) : (
              "Ingresar"
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
