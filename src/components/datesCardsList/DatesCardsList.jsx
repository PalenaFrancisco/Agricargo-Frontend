import { useState } from "react";
import DatesCard from "../datesCard/DatesCard";

const DatesCardsList = () => {
    const [selectedDateId, setSelectedDateId] = useState(1);

    const dates = [
        { id: 1, date: "12/10/24" },
        { id: 2, date: "15/10/24" },
        { id: 3, date: "20/10/24" },
    ];

    const handleSelectDate = (id) => {
        setSelectedDateId(id);
    };

    return (
        <div>
            {dates.map((date) => (
                <DatesCard
                    key={date.id}
                    date={date.date}
                    isSelected={selectedDateId === date.id}
                    onSelect={() => handleSelectDate(date.id)}
                />
            ))}
        </div>
    );
};

export default DatesCardsList;
