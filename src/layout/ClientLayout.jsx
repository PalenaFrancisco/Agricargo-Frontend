import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

const ClientLayout = ({ children }) => {
  return (
    <div className="">
      <Sidebar userType={"cliente"} />
      <Main>{children}</Main>
    </div>
  );
};

export default ClientLayout;
