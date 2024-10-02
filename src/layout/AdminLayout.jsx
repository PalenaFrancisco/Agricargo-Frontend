import Sidebar from "../components/sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar userType={"empresa"} />
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
