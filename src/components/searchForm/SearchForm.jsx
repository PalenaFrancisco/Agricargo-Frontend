import Input from "../input/Input"
import Button from "../button/Button"
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const SearchForm = ({ isSearchMode = true }) => {
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [cantidad, setCantidad] = useState(0);

    const buttonText = isSearchMode ? "Buscar" : <IoSearch className="text-white text-2xl mr-0.5 mt-0.5"/>;
    const buttonClasses = isSearchMode
        ? "px-5 py-2.5 rounded-lg"
        : "rounded-full size-12 flex justify-center item-center";

    return (
        <form className="flex items-center gap-4">
            <Input setInputValue={setOrigen}>Origen</Input>
            <Input setInputValue={setDestino}>Destino</Input>
            <Input type="number" setInputValue={setCantidad}>Cantidad</Input>
            <Button className={buttonClasses} actionClick={() => console.log((`${destino} => ${origen} => ${cantidad}`))}>{buttonText}</Button>
        </form>
    );
};

export default SearchForm;