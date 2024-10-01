import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Sidebar = ({ userType }) => {
const menuOptions = {
  cliente: {
    paths: [
      { name: "Inicio", path: "/" },
      { name: "Mis Reservas", path: "/cliente/mis-reservas" },
      { name: "Mis Favoritos", path: "/cliente/mis-favoritos" },
    ],
    other: [
      { name: "Ajustes", path: "/cliente/soporte" },
      { name: "Logout", path: "/cliente/configuracion" },
    ],
  },
  empresa: {
    paths: [
      { name: "Viajes", path: "/empresa/viajes" },
      { name: "Barcos", path: "/cliente/logout" },
    ],
    other: [
      { name: "Ajustes", path: "/empresa/ajustes" },
      { name: "Logout", path: "/empresa/logout" },
    ],
  },
};

  const mappedMenuOptions = menuOptions[userType].paths.map((menuOption, index) => (
    <li key={index}>
      <NavLink
        to={menuOption.path}
        className={({ isActive }) =>
          `flex items-center px-4 py-3 text-gray-900 rounded-lg dark:text-white hover:transition-all hover:bg-gray-100 dark:hover:bg-gray-700 group ${
            isActive
              ? "text-white bg-blue-700 hover:bg-blue-800"
              : "bg-transparent"
          }`
        }
      >
        <svg
          className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        >
          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
        </svg>
        <span className="ms-3">{menuOption.name}</span>
      </NavLink>
    </li>
  ));

  const mappedMenuFooterOptions = menuOptions[userType].other.map(
    (menuOption, index) => (
      <li key={index}>
        <NavLink
          to={menuOption.path}
          className="flex items-center px-4 py-3 text-gray-900 rounded-lg dark:text-white hover:transition-all hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 21"
          >
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          </svg>
          <span className="ms-3">{menuOption.name}</span>
        </NavLink>
      </li>
    )
  );

  return (
    <>
      <nav className="w-full h-24 fixed top-0 left-0 z-30 flex justify-end items-center pr-20 bg-white border-b border-gray-200">
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
            </li>
            <li>
              <div className="relative size-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute size-10 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <aside
        className="fixed flex flex-col items-center justify-between top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <img src={Logo} alt="Logo de Agricargo" className="pt-8" />
        <div className="h-3/4 pt-20 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">{mappedMenuOptions}</ul>
        </div>

        <div className="flex items-center justify-center h-1/4 w-full pb-4 overflow-y-auto bg-white dark:bg-gray-800 border-t border-gray-200">
          <ul className="space-y-2 font-medium">{mappedMenuFooterOptions}</ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
