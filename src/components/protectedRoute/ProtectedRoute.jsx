import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { userProfile, userRole } = useAuthContext();
  
    if (!userProfile.token) {
      return <Navigate to="/login" />;
    }
  
    if (!allowedRoles.includes(userRole.decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"])) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };

  export default ProtectedRoute;