import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import IsLoggedHook from "../hooks/isLoggedHook/IsLoggedHook";
import { useState } from "react";
// import { useAuthContext } from "../components/context/AuthProvider";
// import { useState } from "react";

const SuperAdminLayout = ({ children }) => {
  const {isLogged, setIsLogged} = IsLoggedHook();

  // const { userProfile } = useAuthContext();

  //  const [isLogged, setIsLogged] = useState(userProfile.token ?? null);
const [showSidebar, setShowSidebar] = useState(false);

const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <div className="w-full">
        <Sidebar
          userType={"superAdmin"}
          islogged={isLogged}
          setUserLogout={setIsLogged}
          options={false}
          show={showSidebar}
          closeSidebar={toggleSidebar}
        />
        <Navbar islogged={isLogged} toggleSidebar={toggleSidebar} />
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default SuperAdminLayout;
