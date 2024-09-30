const ReservationTable = ({ data }) => {
  const statusStyles = {
    Confirmado: "bg-green-100 text-green-800",
    Pendiente: "bg-yellow-100 text-yellow-800",
    Cancelado: "bg-red-100 text-red-800",
  };

  const mappedElements = data.map((element) => (
    <tr
      key={element.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="px-6 py-4">{`${element.origin} - ${element.destination}`}</td>
      <td className="px-6 py-4">{element.date}</td>
      <td className="px-6 py-4">{element.price}</td>
      <td className={`px-6 py-4 `}>
        <span
          className={`py-2 px-3 rounded-xl ${statusStyles[element.status]}`}
        >
          {element.status}
        </span>
      </td>
    </tr>
  ));

  // const tableCols = cols.map((element, index) => (
  //   <th key={index} scope="col" className="px-6 py-3">
  //     {element}
  //   </th>
  // ));

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Viaje
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>{mappedElements}</tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
