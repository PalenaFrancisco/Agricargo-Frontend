import Input from "../input/Input";
import Button from "../button/Button";
import { IoSearch } from "react-icons/io5";
import { useRef, useState } from "react";

const SearchForm = ({ isSearchMode = true, searchSetter }) => {
  const [inputValues, setInputValues] = useState({
    origin: "",
    destination: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({
    origin: false,
    destination: false,
    quantity: false,
  });

  // Crear refs para los campos de entrada
  const originRef = useRef();
  const destinationRef = useRef();
  const quantityRef = useRef();

  // Validar los campos en tiempo real
  const validateField = (field, value) => {
    let error = false;

    if (field === "origin" || field === "destination") {
      error = /\d/.test(value); // Detecta números en los campos de texto
    } else if (field === "quantity") {
      error = value <= 0 || isNaN(value); // Detecta valores no positivos o no numéricos
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleInputChange = (field, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [field]: value }));
    validateField(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que no haya errores antes de enviar el formulario
    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      searchSetter(inputValues);
    }
  };

  const buttonText = isSearchMode ? (
    "Buscar"
  ) : (
    <IoSearch className="text-white text-2xl mr-0.5 mt-0.5" />
  );
  const buttonClasses = isSearchMode
    ? "px-5 py-2.5 rounded-lg"
    : "rounded-full size-12 flex justify-center items-center";

  return (
    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
      <Input
        ref={originRef}
        setInputValue={(value) => handleInputChange("origin", value)}
        inputstyle={errors.origin ? "border-red-500" : ""}
      >
        Origen
      </Input>
      <Input
        ref={destinationRef}
        setInputValue={(value) => handleInputChange("destination", value)}
        inputstyle={errors.destination ? "border-red-500" : ""}
      >
        Destino
      </Input>
      <Input
        ref={quantityRef}
        type="number"
        setInputValue={(value) => handleInputChange("quantity", value)}
        inputstyle={errors.quantity ? "border-red-500" : ""}
      >
        Cantidad
      </Input>
      <Button className={buttonClasses} actionClick={handleSubmit}>
        {buttonText}
      </Button>
    </form>
  );
};

export default SearchForm;