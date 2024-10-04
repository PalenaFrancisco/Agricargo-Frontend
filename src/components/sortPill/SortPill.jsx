import { GoArrowUp, GoArrowDown } from "react-icons/go";
const SortPill = ({ children, actionSort }) => {
  const handleClick = () => {
    actionSort();
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center gap-1.5 rounded-2xl border border-token-border-light px-3 py-2 text-start text-sm shadow-md transition enabled:hover:bg-surface-secondary disabled:cursor-not-allowed xl:gap-2 xl:text-sm w-fit bg-white hover:bg-gray-100/75"
    >
      <div className="flex">
        <GoArrowUp className="fill-black" />
        <GoArrowDown className="fill-black" />
      </div>
      <div className="max-w-full text-balance text-gray-600 dark:text-gray-500 break-word">
        {children}
      </div>
    </button>
  );
};

export default SortPill;
