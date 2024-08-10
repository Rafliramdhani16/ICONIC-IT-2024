const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex flex-col items-start space-y-1">
        <div className="font-bold text-xl">GYANA</div>
        <div className="flex items-center">
          <div className="font-bold text-xl">KAYA</div>
          <div className="bg-blue-600 w-2 h-2 rounded-full ml-1"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-8">
        <input
          type="text"
          placeholder="Temukan materi"
          className="w-full p-2 rounded-lg bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="text-blue-600 border border-blue-600 rounded-full px-4 py-2">
          Masuk
        </button>
        <button className="bg-blue-600 text-white rounded-full px-4 py-2">
          Daftar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
