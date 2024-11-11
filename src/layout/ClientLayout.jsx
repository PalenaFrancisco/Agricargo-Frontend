import AppLayout from "./AppLayout";

const ClientLayout = ({ children, search, className, buttonBack }) => {
  return (
    <AppLayout
      userType="client"
      search={search}
      className={className}
      buttonBack={buttonBack}
    >
      {children}
    </AppLayout>
  );
};

export default ClientLayout;

