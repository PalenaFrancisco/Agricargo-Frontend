
import Logo from '../assets/logo.svg'

const LoginLayout = ({ children }) => {
  return (
    <>
        <nav className='w-full'>
            <a href='/'><img src={Logo} alt="Logo de Agricargo" className="pt-8 pl-8" /></a>
        </nav>
        <div>
            {children}
        </div>
    </>
  )
}

export default LoginLayout