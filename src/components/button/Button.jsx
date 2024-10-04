

const Button = ( {children, className, actionClick} ) => {
  return (
    <button
      type="button"
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className}`} 
      onClick={actionClick}
    >
      {children}
    </button>
  );
};

export default Button;
