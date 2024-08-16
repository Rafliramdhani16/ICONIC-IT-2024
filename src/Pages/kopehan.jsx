import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const ModulPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          sidebarOpen ? "lg:pr-64" : "lg:pr-12"
        }`}
      >
        {/* Header with title */}
        <h1 className="text-2xl font-semibold mb-6">Modul HTML Dasar</h1>

        {/* Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src="/materi.png"
              alt="Materi"
              className="w-full lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-6"
            />
            <div className="lg:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                Pernah penasaran bagaimana website itu dibuat? Nah, di balik
                setiap halaman web, ada HTML yang menjadi tulang punggungnya.
                HTML (HyperText Markup Language) adalah bahasa dasar yang
                dipakai untuk menampilkan teks, gambar, dan berbagai konten
                lainnya di internet.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Di artikel ini, kita bakal jalan bareng-bareng belajar HTML dari
                nol. Tenang, nggak perlu jadi jago coding dulu buat ngerti,
                karena HTML itu simpel dan asyik dipelajari!
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center">
            <MdArrowBack className="mr-2" /> Sebelumnya
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-md flex items-center">
            Selanjutnya <MdArrowForward className="ml-2" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out ${
          sidebarOpen
            ? "translate-x-0"
            : "translate-x-full lg:translate-x-0 lg:w-12"
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-blue-500 text-white">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-4">
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <h2
              className={`${
                sidebarOpen ? "block" : "hidden lg:block"
              } text-xl font-semibold`}
            >
              Daftar Modul
            </h2>
          </div>
        </div>
        <ul className={`${sidebarOpen ? "block" : "hidden lg:block"}`}>
          <li className="py-2 px-4 bg-blue-100 rounded-md mb-2 cursor-pointer">
            Pengenalan HTML
          </li>
          <li className="py-2 px-4 hover:bg-blue-100 rounded-md mb-2 cursor-pointer">
            Buat HTML
          </li>
          <li className="py-2 px-4 hover:bg-blue-100 rounded-md cursor-pointer">
            Buat HTML
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModulPage;
