import Input from "../input/Input"
import Button from "../button/Button"
import { IoSearch } from "react-icons/io5";
import { useDataContext } from "../context/DataProvider";
import { fetchData } from "../../utils/fetchData";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ isSearchMode = true }) => {
    
    const {inputValues, setInputValues, setResults, results} = useDataContext();
    const navigate = useNavigate();

    const buttonText = isSearchMode ? "Buscar" : <IoSearch className="text-white text-2xl mr-0.5 mt-0.5"/>;
    const buttonClasses = isSearchMode
        ? "px-5 py-2.5 rounded-lg"
        : "rounded-full size-12 flex justify-center item-center";

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData("/trips.json")
        .then(result =>{ 
            setResults(result)
            console.log(results)
            navigate("/cliente/resultados")
        })
        .catch(error => console.log(error));
    };

    return (
        <form className="flex items-center gap-4">
            <Input setInputValue={(value) => setInputValues({...inputValues, origin: value})}>Origen</Input>
            <Input setInputValue={(value) => setInputValues({...inputValues, destination: value})}>Destino</Input>
            <Input type="number" setInputValue={(value) => setInputValues({...inputValues, quantity: value})}>Cantidad</Input>
            <Button className={buttonClasses} actionClick={handleSubmit}>{buttonText}</Button>
        </form>
    );
};

export default SearchForm;