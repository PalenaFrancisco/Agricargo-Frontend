import { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [inputValues, setInputValues] = useState({
        origin: "",
        destination: "",
        quantity: "",
    });

    const [userProfile, setUserProfile] = useState({
      username: "",
      password: ""
    });

    const [results, setResults] = useState([]);
    
    return (
        <DataContext.Provider value={{inputValues, setInputValues, results, setResults, userProfile, setUserProfile}}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
};