import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import IsLoggedHook from "../hooks/isLoggedHook/IsLoggedHook";

// import { useAuthContext } from "../components/context/AuthProvider";
// import { useState } from "react";

const AdminLayout = ({ children }) => {
  const {isLogged, setIsLogged} = IsLoggedHook();


  return (
    <>
      <div className="w-full">
        <Sidebar
          userType={"company"}
          islogged={isLogged}
          setUserLogout={setIsLogged}
        />
        <Navbar islogged={isLogged} />
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default AdminLayout;
