import AppLayout from "./AppLayout";

const AdminLayout = ({ children }) => {
  return <AppLayout userType="company">{children}</AppLayout>;
};

export default AdminLayout;
