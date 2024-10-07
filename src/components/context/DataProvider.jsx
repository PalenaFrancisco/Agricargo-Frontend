import { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const [inputValues, setInputValues] = useState({
    origin: "",
    destination: "",
    quantity: "",
  });
  // Funciones para manejar favoritos
  const addFavorite = (trip) => {
    setFavorites((prevFavorites) => [...prevFavorites, trip]);
  };

  const removeFavorite = (tripId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== tripId)
    );
  };

  // Funciones para manejar los valores de los inputs
  const updateInputValue = (field, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
    console.log(inputValues);
  };
  return (
    <DataContext.Provider
      value={{
        favorites,
        inputValues,
        addFavorite,
        removeFavorite,
        updateInputValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
