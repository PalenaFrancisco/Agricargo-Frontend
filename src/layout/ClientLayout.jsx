import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import { useAuthContext } from "../components/context/AuthProvider";
import { useState } from "react";

const ClientLayout = ({ children, search, className, buttonBack}) => {
  const { userProfile } = useAuthContext();

  const [isLogged, setIsLogged] = useState(userProfile.token ?? null);

  return (
    <div className="w-full">
      <Sidebar userType={"client"} islogged={isLogged} setUserLogout={setIsLogged}/>
      <Navbar searchInNav={search} islogged={isLogged} backButton={buttonBack}/>
      <Main classN={className}>{children}</Main>
    </div>
  );
};

export default ClientLayout;
