import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AdminLayout from '../../layout/AdminLayout';
import { fetchData } from '../../utils/fetchData';
import ReusableTable from '../../components/tables/ReusableTable';
import SortSection from '../../components/sortSection/SortSection';
import { useAuthContext } from '../../components/context/AuthProvider';

const AdminListShips = () => {
    const [ships, setShips] = useState([]);
    const [filteredTrips, setFilteredTrips] = useState(ships);
    const [filterActivate, setFilterActivate] = useState(false);
    const {userProfile} = useAuthContext();
    const navigate = useNavigate();

    const statusOrder = ["En viaje", "En preparación", "Finalizado"];

    useEffect(() => {
        fetch("https://localhost:7183/Ship/addShip", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${userProfile.token}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud: " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                setTrips(data);
                setFilteredTrips(data);
                console.log(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    const sortTripsByStatus = () => {
        const sorted = [...trips].sort((a, b) => {
            const statusA = statusOrder.indexOf(a.status);
            const statusB = statusOrder.indexOf(b.status);
            return isAscending ? statusA - statusB : statusB - statusA;
        });
        setFilteredTrips(sorted);
        setIsAscending(!isAscending);
        setFilterActivate(true);
    };

    const resetFilters = () => {
        setFilteredTrips(trips);
        setFilterActivate(!filterActivate);
    };

    const removeShip = async (item) => {
        item.preventDefault();
        try {
            const res = await fetch("https://localhost:7183/Ship/deleteShip",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${userProfile.token}`
                    }
                })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la solicitud: " + response.statusText);
                    }
                    return response.json();
                })
                .then((data) => {
                    setTrips(data);
                    setFilteredTrips(data);
                    console.log(data);
                })
                .catch((error) => console.error("Error:", error));
        }
        catch (error) {
            console.error(error);
        }
    };

    const editShip = (item) => { //Tengo que enviar el usuario al AdminCreateShip con la info del barco que se quiere modificar y autocompletar los inputs y en el boton de aplicar cambios llamar este endpoint y le paso los datos
        navigate(`/empresa/modificar-barco/${item.id}`, {
            state: {
                ship: {
                    capacity: item.capacity,
                    typeShip: item.typeShip,
                    captain: item.captain,
                    shipPlate: item.shipPlate,
                    idShip: item.id
                }
            }
        })
    };

    const actions = [
        {
            label: "Editar",
            handler: editShip,
            className: "bg-blue-500 hover:bg-blue-700",
        },
        {
            label: "Eliminar",
            handler: removeShip,
            className: "bg-red-500 hover:bg-red-700"
        },
    ];

    const columns = [
        { key: 'ship', value: 'Barco' },
        { key: 'maxTons', value: 'Toneladas Maximas' },
        { key: 'state', value: 'Estado' },
    ];

    const sortOptions = [
        { label: "Estado", actionSort: sortTripsByStatus }
    ]

    return (
        <AdminLayout>
            <SortSection title={"Barcos:"}
                sortOptions={sortOptions}
                filterActivate={filterActivate}
                resetFilters={resetFilters} />
            <div className="px-20 w-full py-6">
                <ReusableTable columns={columns}
                    data={filteredTrips}
                    actions={actions}
                    statusColumn={"status"} />
            </div>
        </AdminLayout>
    );
};

export default AdminListShips;
