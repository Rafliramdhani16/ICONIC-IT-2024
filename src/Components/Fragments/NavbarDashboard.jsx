import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthLogContext";
import ButtonNav from "../Elements/Navbar/ButtonNav";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-white xl:rounded-b-[30px] md:rounded-b-[30px] fixed top-0 left-0 right-0 w-full z-50 shadow-md">
      <div className="flex items-center md:ml-5">
        <Link to="/">
          <img src="/logo.png" alt="logo-gyanakaya" className="w-20" />
        </Link>
      </div>

      <div className="flex md:hidden items-center">
        <button
          onClick={toggleMenu}
          className="flex justify-end items-end relative w-6 h-6 transition-all duration-500 ease-in-out"
        >
          <span
            className={`absolute w-6 h-[3px] bg-black transition-all duration-500 ease-in-out rounded-lg ${
              menuOpen ? "rotate-45 top-3" : "top-0"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-[3px] bg-black transition-all duration-500 ease-in-out rounded-lg ${
              menuOpen ? "opacity-0" : "opacity-100 top-2"
            }`}
          ></span>
          <span
            className={`absolute w-6 h-[3px] bg-black transition-all duration-500 ease-in-out rounded-lg ${
              menuOpen ? "-rotate-45 top-3" : "top-4"
            }`}
          ></span>
        </button>
      </div>

      <div className="hidden md:flex space-x-4 items-center mr-5">
        <ButtonNav
          user={user}
          handleLogout={handleLogout}
          navigate={navigate}
        />
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          <ButtonNav
            user={user}
            handleLogout={handleLogout}
            navigate={navigate}
            isMobile={true}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
