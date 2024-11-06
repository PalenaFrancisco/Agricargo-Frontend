import Button from "../button/Button";
import Input from "../input/Input";
import { useAuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminLayout from '../../layout/SuperAdminLayout';

const AdminCreateForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Admin");

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
    };

    
    const passwordGenerated = () => {
         
        setPassword(lastName + name); 
    };

    
    const cancelCreateAction = () => {
        cleanInputs();
        navigate(-1); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                throw res;
            }

            
            cleanInputs();

            
            navigate("/sysadmin");
        } catch (error) {
            console.error("Error al Registrar:", error);
        }
    };

    return (
        <SuperAdminLayout>
            <div className="w-[700px] bg-white shadow-lg rounded-lg p-6 space-y-4 mt-10">
                <form onSubmit={handleSubmit}>
                    <Input
                        inputclass={"w-full rounded-md mb-3"}
                        setInputValue={(value) => setName(value)}
                    >
                        Nombre
                    </Input>

                    <Input
                        inputclass={"w-full rounded-md mb-3"}
                        setInputValue={(value) => setLastName(value)}
                    >
                        Apellido
                    </Input>

                    <Input
                        inputclass={"w-full rounded-md mb-3"}
                        setInputValue={(value) => setEmail(value)}
                    >
                        Email
                    </Input>

                    <Input
                        inputclass={"w-full rounded-md mb-3"}
                        setInputValue={(value) => setPhoneNumber(value)}
                    >
                        Telefono (opcional)
                    </Input>

                   
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
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
                        <Input
                            inputclass={"w-full rounded-md mb-3"}
                            setInputValue={(value) => setCompanyName(value)}
                        >
                            Nombre Compania
                        </Input>
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
