import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AdminLayout from '../../layout/AdminLayout';
import ReusableTable from '../../components/tables/ReusableTable';
import SortSection from '../../components/sortSection/SortSection';
import { useAuthContext } from '../../components/context/AuthProvider';
import Button from '../../components/button/Button';

const AdminListShips = () => {
    const [ships, setShips] = useState([]);
    const [filteredShips, setFilteredShips] = useState(ships);
    const [filterActivate, setFilterActivate] = useState(false);
     const [isAscending, setIsAscending] = useState(true);
    const {userProfile} = useAuthContext();
    const navigate = useNavigate();

    const statusOrder = ["Disponible", "Ocupado"];

    useEffect(() => {
        fetch("https://localhost:7183/Ship/getShips", {
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
                setShips(data);
                setFilteredShips(data);
                console.log(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    const sortShipsByStatus = () => {
        const sorted = [...ships].sort((a, b) => {
            const statusA = statusOrder.indexOf(a.status);
            const statusB = statusOrder.indexOf(b.status);
            return isAscending ? statusA - statusB : statusB - statusA;
        });
        setFilteredShips(sorted);
        setIsAscending(!isAscending);
        setFilterActivate(true);
    };

    const resetFilters = () => {
        setFilteredShips(ships);
        setFilterActivate(!filterActivate);
    };

  const removeShip = async (item) => {
    try {
      const response = await fetch(
        `https://localhost:7183/Ship/deleteShip/${item.shipId}`,
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

      const shipsFiltered = ships.filter((ship) => ship.shipId !== item.shipId);
      setShips(shipsFiltered);
      setFilteredShips(shipsFiltered);

    } catch (error) {
      console.error("Error:", error);
    }
  };


    const editShip = (item) => { 
        navigate(`/empresa/modificar-barco/${item.shipId}`, {
            state: {
                ship: {
                    capacity: item.capacity,
                    typeShip: item.typeShip,
                    captain: item.captain,
                    shipPlate: item.shipPlate,
                    idShip: item.shipId
                }
            }
        })
    };

    const handleCreateShip = () => {
        navigate("/empresa/crear-barco");
    }

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
      { key: "typeShip", value: "Barco" },
      { key: "capacity", value: "Toneladas Maximas" },
      { key: "availabilityStatus", value: "Estado" },
    ];

    const sortOptions = [
        { label: "Estado", actionSort: sortShipsByStatus }
    ]

    return (
      <AdminLayout>
        <SortSection
          title={"Barcos:"}
          sortOptions={sortOptions}
          filterActivate={filterActivate}
          resetFilters={resetFilters}
        >
          <Button className={"w-fit px-5 rounded-lg"} actionClick={handleCreateShip}>Crear barco</Button>
        </SortSection>
        <div className="px-20 w-full py-6">
          <ReusableTable
            columns={columns}
            data={filteredShips}
            actions={actions}
            statusColumn={"availabilityStatus"}
          />
        </div>
      </AdminLayout>
    );
};

export default AdminListShips;
