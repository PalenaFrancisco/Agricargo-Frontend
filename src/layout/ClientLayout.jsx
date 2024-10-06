import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";

const ClientLayout = ({ children, search, className}) => {
  return (
    <div className="w-full">
      <Sidebar userType={"cliente"} />
      <Navbar searchInNav={search} islogged={false}/>
      <Main classN={className}>{children}</Main>
    </div>
  );
};

export default ClientLayout;
