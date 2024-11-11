import { RxCross2 } from "react-icons/rx";
import Logo from '../assets/logo.svg'
import { useNavigate } from "react-router-dom";

const LoginLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full h-100dvh flex justify-between dark:bg-gray-800 dark:border-gray-700">
        <a href="/">
          <img src={Logo} alt="Logo de Agricargo" className="pt-8 pl-8" />
        </a>
        <button onClick={() => navigate(-1)} className="mr-5">
          <RxCross2 className="text-gray-500 text-3xl" />
        </button>
      </nav>
      <div>{children}</div>
    </>
  );
}

export default LoginLayout