import Logo from "../Logo";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Dropdown from "../Dropdown";

const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="backdrop-blur-lg bg-indigo-900/30 border-b border-indigo-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/dashboard" className="flex items-center space-x-2">
          <Logo />
        </Link>

        <div className="flex items-center space-x-4">
          <p className="text-cyan-300/90 font-medium text-lg mb-1 animate-fade-in">
            ¡Bienvenido,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold not-italic">
              {user.nombres} {user.apellidos}
            </span>
            !
          </p>
          <div className="relative group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold cursor-pointer">
              {user.nombres || user.apellidos
                ? user.nombres.charAt(0).toUpperCase() +
                  user.apellidos.charAt(0).toUpperCase()
                : "U"}
            </div>
            <Dropdown onClick={logout}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
