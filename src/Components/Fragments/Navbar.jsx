import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import Button from "../Elements/Button/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { getCurrentUserFromToken, logoutUser } from "../../Services/AuthLog";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const currentUsername = getCurrentUserFromToken();
    if (currentUsername) {
      setUsername(currentUsername);
    }
  }, []);

  const handleMasuk = () => {
    navigate("/masuk");
  };

  const handleDaftar = () => {
    navigate("/daftar");
  };

  const handleLogout = async () => {
    await logoutUser();
    setUsername(null);
    navigate("/");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md rounded-b-[30px] fixed top-0 left-0 right-0 w-full z-50">
      {/* Logo */}
      <div className="flex flex-col items-start space-y-1 mx-3 md:mx-6">
        {/* <div className="font-bold text-xl tracking-[3px]">Gyana</div>
        <div className="flex items-center">
          <div className="font-bold text-xl tracking-[3px]">Kaya</div>
          <div className="bg-blue-500 w-2 h-2 rounded-full ml-1"></div>
        </div> */}
        <img src="/logo.png" alt="logo-gyanakaya" className="w-20 " />
      </div>

      {/* Jelajahi */}
      <div className="ml-4 md:ml-10">Jelajahi</div>

      {/* Search Bar */}
      <div className="w-full mt-4 md:mt-0 md:w-auto md:mx-8 flex-grow">
        <div className="relative flex items-center max-w-full md:max-w-[750px]">
          <AiOutlineSearch className="absolute left-3 text-neutral-500" />
          <input
            type="text"
            placeholder="Temukan materi"
            className="w-full p-2 pl-10 rounded-lg bg-neutral-200 focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-5 md:mt-0 mx-5 md:mx-21 items-center">
        {username ? (
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle className="text-2xl text-neutral-800 " />
              <span className="text-lg ">{username}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Button
              className="text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white"
              onClick={handleMasuk}
              type="button"
            >
              Masuk
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border"
              onClick={handleDaftar}
              type="button"
            >
              Daftar
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
