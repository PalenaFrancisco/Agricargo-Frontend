import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import IsLoggedHook from "../hooks/isLoggedHook/IsLoggedHook";
import { useState } from "react";
// import { useAuthContext } from "../components/context/AuthProvider";
// import { useEffect, useState } from "react";

const ClientLayout = ({ children, search, className, buttonBack}) => {
  const {isLogged, setIsLogged} = IsLoggedHook();
   const [showSidebar, setShowSidebar] = useState(false);

   const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="w-full">
      <Sidebar userType={"client"} islogged={isLogged} setUserLogout={setIsLogged} show={showSidebar} closeSidebar={toggleSidebar}/>
      <Navbar searchInNav={search} islogged={isLogged} backButton={buttonBack} toggleSidebar={toggleSidebar}/>
      <Main classN={className}>{children}</Main>
    </div>
  );
};

export default ClientLayout;
