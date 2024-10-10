import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AdminLayout from "../../layout/AdminLayout";

const AdminCreateShip = () => {
  return (
    <AdminLayout>
      <section className="w-full px-20 flex flex-col gap-6 pt-10">
        <h1 className="text-black text-3xl font-semibold">Crear barco</h1>
        <form action="" className="flex flex-col gap-4 max-w-[1024px]">
          <Input>Nombre y apellido del capitán</Input>
          <Input>Patente del barco</Input>
          <Input type="number">Capacidad del barco</Input>
          <Input type="number">Tipo de barco</Input>
          <div className="mt-4">
            <Button
              className={"px-4 py-2 rounded"}
              bgColor={"bg-red-700"}
              hoverColor={"hover:bg-red-800"}
            >
              Cancelar
            </Button>
            <Button className={"px-4 py-2 rounded"}>Aplicar cambios</Button>
          </div>
        </form>
      </section>
    </AdminLayout>
  );
};

export default AdminCreateShip;
