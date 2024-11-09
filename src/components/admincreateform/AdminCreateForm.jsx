import Button from "../button/Button";
import Input from "../input/Input";
import { useAuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminLayout from '../../layout/SuperAdminLayout';
import ModalFetch from "../modalFetch/modalFetch";

const AdminCreateForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    // const [password, setPassword] = useState("");
    const [role, setRole] = useState("Admin");

    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({}); // Estado para errores

    const navigate = useNavigate();
    const { userProfile } = useAuthContext();

    const cleanInputs = () => {
        setName("");
        setEmail("");
        setLastName("");
        setPhoneNumber("");
        setCompanyName("");
        setRole("Admin");
        setPassword("");
        setErrors({}); // Limpiar errores
    };

    const cancelCreateAction = () => {
        cleanInputs();
        navigate(-1); 
    };

    const validateFields = () => {
        const newErrors = {};

        if (!name) newErrors.name = "Nombre es requerido";
        if (!lastName) newErrors.lastName = "Apellido es requerido";
        if (!email) newErrors.email = "Email es requerido";
        if (role === "Admin" && !companyName) newErrors.companyName = "Nombre de compañía es requerido para Admin";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFields()) return;

        try {
            const res = await fetch("https://localhost:7183/api/Auth/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${userProfile.token}`,
                },
                body: JSON.stringify({
                    name: name + " " + lastName,
                    email,
                    password: lastName + name,
                    role,
                    ...(role === "Admin" && companyName !== "" ? { companyName } : {})
                }),
            });

            if (!res.ok) {
                const errorResponse = await res.json();
                const errorMessages = Object.entries(errorResponse.errors)
                    .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
                    .join(" | ");
                
                throw new Error(errorMessages);
            }

            cleanInputs();
            navigate("/sysadmin");
        } catch (error) {
            setMessage(error.message);
            setShowModal(true);
            console.error("Error al Registrar:", error);
        }
    };

    return (
      <SuperAdminLayout>
        {showModal && (
          <ModalFetch message={message} onClose={() => setShowModal(false)} />
        )}
        <div className="w-[700px] bg-white shadow-lg rounded-lg p-6 space-y-4 mt-10 dark:bg-gray-800 ">
          <form onSubmit={handleSubmit}>
            <Input
              inputclass={`w-full rounded-md mb-2 mt-2`}
              setInputValue={(value) => setName(value)}
              inputstyle={errors.name ? "border-red-500" : ""}
            >
              Nombre
            </Input>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <Input
              inputclass={`w-full rounded-md mb-2 mt-2`}
              setInputValue={(value) => setLastName(value)}
              inputstyle={errors.lastName ? "border-red-500" : ""}
            >
              Apellido
            </Input>
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}

            <Input
              inputclass={`w-full rounded-md mb-2 mt-2`}
              setInputValue={(value) => setEmail(value)}
              inputstyle={errors.email ? "border-red-500" : ""}
            >
              Email
            </Input>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <Input
              inputclass="w-full rounded-md mb-2 mt-2"
              setInputValue={(value) => setPhoneNumber(value)}
            >
              Teléfono (opcional)
            </Input>

            <div className="mb-3">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Tipo de Rol
              </label>
              <select
                id="role"
                className="w-full rounded-md text-black p-3 border-2 border-gray-200"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Admin">Admin</option>
                <option value="SuperAdmin">Super Admin</option>
              </select>
            </div>

            {role === "Admin" && (
              <>
                <Input
                  inputclass={`w-full rounded-md mb-3`}
                  setInputValue={(value) => setCompanyName(value)}
                  inputstyle={errors.companyName ? "border-red-500" : ""}
                >
                  Nombre Compañía
                </Input>
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </>
            )}

            <div className="flex justify-end space-x-4 mt-4">
              <Button
                className={"text-white px-6 py-2 rounded-md"}
                bgColor="bg-red-600"
                hoverColor="red-400"
                actionClick={cancelCreateAction}
              >
                Cancelar
              </Button>

              <Button
                className={"text-white px-6 py-2 rounded-md"}
                typeButton="submit"
              >
                Crear
              </Button>
            </div>
          </form>
        </div>
      </SuperAdminLayout>
    );
};

export default AdminCreateForm;
