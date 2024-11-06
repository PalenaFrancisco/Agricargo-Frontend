const Button = ({ children, className, actionClick, bgColor = "bg-blue-700", hoverColor = "hover:bg-blue-800", typeButton = "button"}) => {
  return (
    <button
      type={typeButton}
      className={`text-white ${bgColor} ${hoverColor}  focus:ring-4 focus:ring-blue-300 font-medium py-2.5 px-5 me-2 focus:outline-none rounded-lg ${className}`}
      onClick={actionClick}
    >
      {children}
    </button>
  );
};

export default Button;
