import Button from "../button/Button"

const DatesCard = ({ date, isSelected, onSelect }) => {

    const bgColor = isSelected ? "bg-green-600" : "bg-gray-500";
    const hoverColor = isSelected ? "hover:bg-green-500" : "hover:bg-gray-600";

    return (
        <div className={`flex justify-between items-center border border-gray-200 rounded-lg p-6 bg-white shadow-md mt-7 space-x-20 ${isSelected ? "border-blue-200 border-2" : ""}`}>
            <section>
                <h2 className="text-black">Fecha de Salida</h2>
            </section>
            <section>
                <h2 className="text-black">{date}</h2>
            </section>
            <Button className="p-4 rounded-lg w-36 transition-all duration-300" actionClick={onSelect} bgColor={bgColor} hoverColor={hoverColor}>
                {isSelected ? "Seleccionado" : "Seleccionar"}
            </Button>
        </div>
    )
}

export default DatesCard