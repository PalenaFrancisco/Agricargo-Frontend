import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";


const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar userType={"empresa"} />
      <Main>{children}</Main>
    </>
  );
};

export default AdminLayout;
