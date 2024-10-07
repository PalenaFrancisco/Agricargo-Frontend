import Input from "../input/Input";
import Button from "../button/Button";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../context/DataProvider";

const SearchForm = ({ isSearchMode = true }) => {
  const { updateInputValue } = useDataContext();
  const buttonText = isSearchMode ? (
    "Buscar"
  ) : (
    <IoSearch className="text-white text-2xl mr-0.5 mt-0.5" />
  );
  const buttonClasses = isSearchMode
    ? "px-5 py-2.5 rounded-lg"
    : "rounded-full size-12 flex justify-center item-center";

  return (
    <form className="flex items-center gap-4">
      <Input getValue={(value) => updateInputValue("origin", value)}>
        Origen
      </Input>
      <Input getValue={(value) => updateInputValue("destination", value)}>
        Destino
      </Input>
      <Input
        type="number"
        getValue={(value) => updateInputValue("quantity", value)}
      >
        Cantidad
      </Input>
      <NavLink to={"/cliente/resultados"}>
        <Button className={buttonClasses}>{buttonText}</Button>
      </NavLink>
    </form>
  );
};

export default SearchForm;
