import { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [inputValues, setInputValues] = useState({
        origin: "",
        destination: "",
        quantity: "",
    });

    const [results, setResults] = useState([]);
    
    return (
        <DataContext.Provider value={{inputValues, setInputValues, results, setResults}}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
};