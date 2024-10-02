import Sidebar from "../components/sidebar/Sidebar";

const ClientLayout = ({ children }) => {
  return (
    <div className="">
      <Sidebar userType={"cliente"} />
      <main className="pl-60 pt-32 w-full h-dvh flex flex-col justify-start items-center">{children}</main>
    </div>
  );
};

export default ClientLayout;
