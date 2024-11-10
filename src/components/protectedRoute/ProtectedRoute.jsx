import { useAuthContext } from "../context/AuthProvider";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal"; 
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { userProfile } = useAuthContext();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let role;
    if(localStorage.getItem("token")){
       role = jwtDecode(localStorage.getItem("token"))?.[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];
    }
      if (
        !userProfile.token ||
        !allowedRoles.includes(role)
      ) {
        setShowModal(true);
      } 
      }, []);
      
      const handleLoginRedirect = () => {
        setShowModal(false);
        navigate("/login");
      };
      
      const handleCloseModal = () => {
        setShowModal(false);
        navigate("/")
      };

  if (showModal) {
    return (
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        onLogin={handleLoginRedirect}
      />
    );
  }



  return children;
};

export default ProtectedRoute;
