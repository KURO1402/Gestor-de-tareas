import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-indigo-900/30 border-b border-indigo-500/20 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/">
              <Logo />
            </Link>
          <div className="flex space-x-4">

            <Link
              to="/login"
              className="px-5 py-2.5 text-sm font-medium text-cyan-100 hover:text-white transition-all duration-300 hover:bg-indigo-500/20 rounded-full"
            > 
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
