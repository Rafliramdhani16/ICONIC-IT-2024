import Button from "../Button/Button";
import { useState } from "react";

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
        {!isMobile && dropdownOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-md z-10 border border-neutral-300 transition-all duration-300 ease-in-out transform origin-top-right">
            <button
              onClick={() => navigate("/profile")}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-200 rounded-t-lg transition-all duration-100 ease-in-out"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-200 rounded-b-lg transition-all duration-100 ease-in-out"
            >
              Keluar
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
        } text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out`}
        onClick={handleMasuk}
        type="button"
      >
        Masuk
      </Button>
      <Button
        className={`${
          isMobile ? "w-full" : ""
        } bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border transition-all duration-300 ease-in-out`}
        onClick={handleDaftar}
        type="button"
      >
        Daftar
      </Button>
    </>
  );
};

export default ButtonNav;
