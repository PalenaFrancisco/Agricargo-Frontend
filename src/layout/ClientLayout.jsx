import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";

const ClientLayout = ({ children, search = false }) => {
  return (
    <div className="">
      <Sidebar userType={"cliente"} />
      <Navbar searchInNav={search}/>
      <Main>{children}</Main>
    </div>
  );
};

export default ClientLayout;
