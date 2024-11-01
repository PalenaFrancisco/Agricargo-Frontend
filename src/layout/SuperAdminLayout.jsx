import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import { useAuthContext } from "../components/context/AuthProvider";

const SuperAdminLayout = ({ children }) => {
  const { userProfile } = useAuthContext();

  const isLogged = !!userProfile.token;

  return (
    <>
      <div className="w-full">
        <Sidebar userType={"superAdmin"}/>
        <Navbar islogged={isLogged} />
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default SuperAdminLayout;
