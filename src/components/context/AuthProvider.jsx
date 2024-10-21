import { useState, useContext, createContext } from "react";
import { useJwt } from "react-jwt";

const AuthContext = createContext();

const initialState = {
    email: "",
    token: localStorage.getItem("token") ?? "",
};

export const AuthProvider = ({ children }) => {


    const [userProfile, setUserProfile] = useState(initialState);
    const userRole = useJwt(userProfile.token);

    const handleLogin = (email, token) => {
        setUserProfile({
            email,
            token
        });
        localStorage.setItem("token", token);
    };

    const handleLogout = () => {
        setUserProfile(initialState);
        localStorage.removeItem("token");
    };
    
    return (
        <AuthContext.Provider value={{ userProfile, userRole, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};