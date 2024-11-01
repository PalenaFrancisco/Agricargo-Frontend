
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../components/context/AuthProvider'
import ReusableTable from '../../components/tables/ReusableTable'
import SuperAdminLayout from '../../layout/SuperAdminLayout'

const SuperAdminList = () => {

    const {userProfile} = useAuthContext()
    const [users, setUsers] = useState([]);

 useEffect(() => {
   fetch("https://localhost:7183/api/User/GetUsers", {
     method: "GET",
     headers: {
       Accept: "application/json",
       Authorization: `Bearer ${userProfile.token}`,
     },
   })
     .then((response) => {
       if (!response.ok) {
         throw new Error("Error en la solicitud: " + response.statusText);
       }
       return response.json();
     })
     .then((data) => {
        setUsers(data);
     })
     .catch((error) => console.error("Error:", error));
 }, []);

 const removeUser = async (userDeleted) => {
    try {
      const response = await fetch(
        `https://localhost:7183/api/User/DeleteUser`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userProfile.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.statusText);
      }

      const usersFiltered = users.filter((user) => user.id !== userDeleted.id);
      setUsers(usersFiltered);

    } catch (error) {
      console.error("Error:", error);
    }
 }

 const columns = [
    {key: "name", value: "Nombre"},
    {key: "typeUser", value: "Tipo de user"},

 ]

  const actions = [
    {
      label: "Eliminar",
      handler: removeUser,
      className: "bg-red-500 hover:bg-red-700",
    },
  ];


  return (
    <SuperAdminLayout>
        dfgdsgsdgsdgsdg
        <ReusableTable columns={columns} data={users} actions={actions}/>
    </SuperAdminLayout>
  )
}

export default SuperAdminList