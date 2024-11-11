import AppLayout from "./AppLayout";

const SuperAdminLayout = ({ children }) => {
  return (
    <AppLayout userType="superAdmin" options={false}>
      {children}
    </AppLayout>
  );
};

export default SuperAdminLayout;
