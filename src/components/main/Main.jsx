

const Main = ({ children, classN }) => {
  return (
    <main
      className={`sm:pl-60 pl-10 pt-28 w-full flex flex-col justify-start items-center dark:bg-gray-800 dark:border-gray-700 ${classN}`}
    >
      {children}
    </main>
  );
}

export default Main