import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AdminLayout from "../../layout/AdminLayout";
import { useLocation, useNavigate } from "react-router-dom";

const AdminCreateShip = ({ editmode = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [capacity, setCapacity] = useState("");
  const [typeShip, setTypeship] = useState("");
  const [captain, setCaptain] = useState("");
  const [shipPlate, setShipPlate] = useState("");
  const [idShip, setIdShip] = useState(null);

  useEffect(() => {
    if (editmode && location.state && location.state.ship) {
      const { capacity, typeShip, captain, shipPlate, idShip } = location.state.ship;
      setCapacity(capacity);
      setTypeship(typeShip);
      setCaptain(captain);
      setShipPlate(shipPlate);
      setIdShip(idShip);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const shipData = { capacity, typeShip, captain, shipPlate };
    try
    {
      if(editmode){
        const res = await fetch(`https://localhost:7183/Ship/updateShip/${idShip}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shipData)
        })

        if (res.ok) {
          console.log("Barco actualizado");
          navigate("/empresa/lista-barcos");
        } else {
          console.error("Error al actualizar el barco");
        }
      }else{
        const res = await fetch(`https://localhost:7183/Ship/createShip`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shipData)
        })

        if (res.ok) {
          console.log("Barco creado");
          navigate("/empresa/lista-barcos");
        } else {
          console.error("Error al actualizar el barco");
        }
      }
    }catch(error){
      console.error(error);
    } 
  };

  const handleCancel = () => {
    setCapacity("");
    setTypeship("");
    setCaptain("");
    setShipPlate("");
    setIdShip(null);
    navigate("/empresa/lista-barcos");
  }

  return (
    <AdminLayout>
      <section className="w-full px-20 flex flex-col gap-6 pt-10">
        <h1 className="text-black text-3xl font-semibold">{editmode ? "Editar barco" : "Crear barco"}</h1>
        <form action="" className="flex flex-col gap-4 max-w-[1024px]" onSubmit={handleSubmit}>
          <Input value={captain} setInputValue={setCaptain}>Nombre y apellido del capitán</Input>
          <Input value={shipPlate} setInputValue={setShipPlate}>Patente del barco</Input>
          <Input type="number" value={capacity} setInputValue={setCapacity}>Capacidad del barco</Input>
          <Input type="number" value={typeShip} setInputValue={setTypeship}>Tipo de barco</Input>
          <div className="mt-4">
            <Button
              className={"px-4 py-2 rounded-lg"}
              bgColor={"bg-red-500"}
              hoverColor={"hover:bg-red-700"}
              actionClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button className={"px-4 py-2 rounded-lg"} typeButton="submit">
              {editmode ? "Aplicar cambios" : "Crear Barco"}
            </Button>
          </div>
        </form>
      </section>
    </AdminLayout>
  );
};

export default AdminCreateShip;
