import Button from "../Button/Button";
import { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const ButtonNav = ({
  user,
  handleLogout,
  navigate,
  isMobile = false,
  toggleMenu = () => {},
}) => {
  const handleMasuk = () => {
    navigate("/masuk");
    if (isMobile) toggleMenu();
  };

  const handleDaftar = () => {
    navigate("/daftar");
    if (isMobile) toggleMenu();
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (user) {
    return (
      <div className={isMobile ? "" : "relative"}>
        <button
          className="flex items-center space-x-2 focus:outline-none transition-all duration-300 ease-in-out mt-5 md:mt-0"
          onClick={() =>
            isMobile ? navigate("/profile") : setDropdownOpen(!dropdownOpen)
          }
        >
          <img
            src={user.image}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg">{user.username}</span>
        </button>
        {isMobile && (
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="mt-4 w-full text-left px-4 py-2 text-neutral-700 bg-gray-200 hover:bg-blue-50 hover:text-red-500 rounded-lg transition-all duration-300 ease-in-out flex items-center group"
          >
            <FaSignOutAlt className="mr-2 transform group-hover:scale-110 transition-all duration-300" />
            <span className="transform group-hover:translate-x-1 transition-all duration-300">
              Keluar
            </span>
          </button>
        )}
        {!isMobile && dropdownOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-md z-10 border border-neutral-300 transition-all duration-300 ease-in-out transform origin-top-right">
            <button
              onClick={() => navigate("/profile")}
              className=" w-full text-left px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-blue-500 rounded-t-lg transition-all duration-300 ease-in-out flex items-center group"
            >
              <FaUser className="mr-2 transform group-hover:scale-110 transition-all duration-300" />
              <span className="transform group-hover:translate-x-1 transition-all duration-300">
                Profile
              </span>
            </button>
            <button
              onClick={handleLogout}
              className=" w-full text-left px-4 py-2 text-neutral-700 hover:bg-blue-50 hover:text-red-500 rounded-b-lg transition-all duration-300 ease-in-out flex items-center group"
            >
              <FaSignOutAlt className="mr-2 transform group-hover:scale-110 transition-all duration-300" />
              <span className="transform group-hover:translate-x-1 transition-all duration-300">
                Keluar
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Button
        className={`${
          isMobile ? "w-full mb-2" : ""
        } text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105`}
        onClick={handleMasuk}
        type="button"
      >
        Masuk
      </Button>
      <Button
        className={`${
          isMobile ? "w-full" : ""
        } bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-blue-600 hover:border transition-all duration-300 ease-in-out transform hover:scale-105`}
        onClick={handleDaftar}
        type="button"
      >
        Daftar
      </Button>
    </>
  );
};

export default ButtonNav;
