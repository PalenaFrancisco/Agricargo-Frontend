import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <Sidebar userType={"empresa"} />
        <Navbar islogged={false} />
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default AdminLayout;
