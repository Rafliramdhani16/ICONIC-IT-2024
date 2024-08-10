import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();

  const handleMasuk = () => {
    navigate("/masuk");
  };

  const handleDaftar = () => {
    navigate("/daftar");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md rounded-b-[50px] fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex flex-col items-start space-y-1 mx-4 md:mx-10">
        <div className="font-bold text-xl tracking-[3px]">Gyana</div>
        <div className="flex items-center">
          <div className="font-bold text-xl tracking-[3px]">Kaya</div>
          <div className="bg-blue-500 w-2 h-2 rounded-full ml-1"></div>
        </div>
      </div>

      {/* Jelajahi */}
      <div className="ml-4 md:ml-10">Jelajahi</div>

      {/* Search Bar */}
      <div className="w-full mt-4 md:mt-0 md:w-auto md:mx-8 flex-grow">
        <div className="relative flex items-center max-w-full md:max-w-[750px] ">
          <AiOutlineSearch className="absolute left-3 text-neutral-500" />
          <input
            type="text"
            placeholder="Temukan materi"
            className="w-full p-2 pl-10 rounded-lg bg-neutral-200 focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4 md:mt-0 mx-4 md:mx-10">
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
      </div>
    </nav>
  );
};

export default Navbar;
