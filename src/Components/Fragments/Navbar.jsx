import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../Elements/Button/Button";
import { getCurrentUserFromToken, logoutUser } from "../../Services/AuthLog";
import ModalSession from "../Elements/Modal/ModalSession";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const [showModalBeforeLogout, setShowModalBeforeLogout] = useState(false);

  useEffect(() => {
    const currentUsername = getCurrentUserFromToken();
    if (currentUsername) {
      setUsername(currentUsername);
    }

    const handleStorageChange = async (e) => {
      if (
        e.key === "token" ||
        e.key === "username" ||
        sessionStorage.getItem("token") === null ||
        sessionStorage.getItem("username") === null
      ) {
        setShowModalBeforeLogout(true);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

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

  const handleConfirmLogout = async () => {
    setShowModalBeforeLogout(false);
    await logoutUser();
    setUsername(null);
    setSessionExpired(true);
    navigate("/masuk");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {sessionExpired && (
        <ModalSession
          message="Sesi Anda telah berakhir. Silakan login kembali."
          onClose={() => setSessionExpired(false)}
        />
      )}

      {showModalBeforeLogout && (
        <ModalSession
          message="Token Anda telah diubah atau dihapus. Anda akan dialihkan ke halaman login."
          onClose={handleConfirmLogout}
        />
      )}

      <nav className="flex items-center justify-between p-4 bg-white shadow-md xl:rounded-b-[30px] md:rounded-b-[30px] fixed top-0 left-0 right-0 w-full z-50">
        <div className="flex items-center md:ml-5">
          <Link to="/">
            <img src="/logo.png" alt="logo-gyanakaya" className="w-20" />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            <div className="ml-4 md:ml-10">Jelajahi</div>

            <div className="relative flex items-center max-w-full w-[600px]">
              <AiOutlineSearch className="absolute left-3 text-neutral-500" />
              <input
                type="text"
                placeholder="Temukan materi"
                className="w-full max-w-[600px] p-2 pl-10 rounded-lg bg-neutral-200 focus:outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="flex justify-end  items-end relative w-6 h-6 transition-all duration-500 ease-in-out "
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
          {username ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 focus:outline-none transition-all duration-300 ease-in-out"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FaUserCircle className="text-2xl text-neutral-800 transition-all duration-300 ease-in-out hover:text-blue-600" />
                <span className="text-lg ">{username}</span>
              </button>
              {dropdownOpen && (
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
          ) : (
            <>
              <Button
                className="text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out"
                onClick={handleMasuk}
                type="button"
              >
                Masuk
              </Button>
              <Button
                className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border transition-all duration-300 ease-in-out"
                onClick={handleDaftar}
                type="button"
              >
                Daftar
              </Button>
            </>
          )}
        </div>

        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4">
            <div
              className="flex items-center mb-4 transition-all duration-500 ease-in-out transform origin-top"
              style={{ transitionDelay: "150ms" }}
            >
              <AiOutlineSearch className="mr-2 text-neutral-500" />
              <input
                type="text"
                placeholder="Temukan materi"
                className="w-full p-2 rounded-lg bg-neutral-200 focus:outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {username ? (
              <>
                <button
                  onClick={() => {
                    navigate("/profile");
                    toggleMenu();
                  }}
                  className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-200 rounded-lg transition-all duration-500 ease-in-out transform origin-top hover:scale-105"
                  style={{ transitionDelay: "200ms" }}
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-200 rounded-lg transition-all duration-500 ease-in-out transform origin-top hover:scale-105"
                  style={{ transitionDelay: "250ms" }}
                >
                  Keluar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    handleMasuk();
                    toggleMenu();
                  }}
                  className="mb-3  block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 hover:bg-blue-700 hover:text-white rounded-lg transition-all duration-500 ease-in-out transform origin-top hover:scale-105"
                  style={{ transitionDelay: "200ms" }}
                >
                  Masuk
                </button>
                <button
                  onClick={() => {
                    handleDaftar();
                    toggleMenu();
                  }}
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white hover:bg-white hover:text-blue-600 rounded-lg transition-all duration-500 ease-in-out transform origin-top hover:scale-105"
                  style={{ transitionDelay: "250ms" }}
                >
                  Daftar
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
