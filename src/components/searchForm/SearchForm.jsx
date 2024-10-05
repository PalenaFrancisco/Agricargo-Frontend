import Input from "../input/Input"
import Button from "../button/Button"
import { IoSearch } from "react-icons/io5";

const SearchForm = ({ isSearchMode = true }) => {
    const buttonText = isSearchMode ? "Buscar" : <IoSearch className="text-white text-2xl mr-0.5 mt-0.5"/>;
    const buttonClasses = isSearchMode
        ? "px-5 py-2.5 rounded-lg"
        : "rounded-full size-12 flex justify-center item-center";

    return (
        <form className="flex items-center gap-4">
            <Input>Origen</Input>
            <Input>Destino</Input>
            <Input type="number">Cantidad</Input>
            <Button className={buttonClasses}>{buttonText}</Button>
        </form>
    );
};

export default SearchForm;