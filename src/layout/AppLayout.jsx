import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import IsLoggedHook from "../hooks/isLoggedHook/IsLoggedHook";
import { useState } from "react";

const AppLayout = ({
  children,
  userType,
  search,
  className,
  buttonBack,
  options = true,
}) => {
  const { isLogged, setIsLogged } = IsLoggedHook();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="w-full">
      <Sidebar
        userType={userType}
        islogged={isLogged}
        setUserLogout={setIsLogged}
        show={showSidebar}
        closeSidebar={toggleSidebar}
        options={options}
      />
      <Navbar
        searchInNav={search}
        islogged={isLogged}
        backButton={buttonBack}
        toggleSidebar={toggleSidebar}
      />
      <Main classN={className}>{children}</Main>
    </div>
  );
};

export default AppLayout;
