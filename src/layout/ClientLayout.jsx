import Sidebar from "../components/sidebar/Sidebar";

const ClientLayout = ({ children }) => {
  return (
    <div className="">
      <Sidebar userType={"cliente"} />
      <main className="pl-40 w-full h-full flex flex-col justify-center items-center">{children}</main>
    </div>
  );
};

export default ClientLayout;
