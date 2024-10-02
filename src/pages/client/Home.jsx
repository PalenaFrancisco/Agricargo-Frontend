import ClientLayout from "../../layout/ClientLayout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Home = () => {
  return (
    <>
      <ClientLayout>
        <section className="flex flex-col gap-6">
          <h1 className="text-black text-3xl font-semibold">Buscar viajes</h1>
          <div className="flex items-center gap-4">
            <Input>Origen</Input>
            <Input>Destino</Input>
            <Input type={"number"}>Cantidad</Input>
            <Button>Buscar</Button>
          </div>
        </section>
      </ClientLayout>
    </>
  );
};

export default Home;
