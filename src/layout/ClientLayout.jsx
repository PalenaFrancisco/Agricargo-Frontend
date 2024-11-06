import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import { useAuthContext } from "../components/context/AuthProvider";

const ClientLayout = ({ children, search, className}) => {
  const { userProfile } = useAuthContext();

  const isLogged = userProfile.token ?? null;

  return (
    <div className="w-full">
      <Sidebar userType={"client"} islogged={isLogged} />
      <Navbar searchInNav={search} islogged={isLogged} />
      <Main classN={className}>{children}</Main>
    </div>
  );
};

export default ClientLayout;
