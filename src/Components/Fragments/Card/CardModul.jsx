import { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Sidebar from "../SideBar";

const CardModul = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="flex items-center p-6 border-b border-neutral-300 shadow-md rounded-b-3xl">
        <BiArrowBack className="text-3xl text-neutral-800" />
        <p className="text-xl font-semibold ml-2">Daftar Modul</p>
      </nav>

      <div className="flex flex-col lg:flex-row h-full">
        <div
          className={`flex-1 p-6 transition-all duration-300 ${
            open ? "lg:pr-[400px]" : "lg:pr-12"
          }`}
        >
          <div className="bg-white p-6 rounded-xl border-2 border-neutral-100 mx-8">
            <div className="flex">
              <img
                src="/materi.png"
                alt="materi"
                className="max-w-2xl max-h-96 rounded-lg"
              />
              <div className="ml-8 mt-6 w-full">
                <p>
                  Pernah penasaran bagaimana website itu dibuat? Nah, di balik
                  setiap halaman web, ada HTML yang menjadi tulang punggungnya.
                  HTML (HyperText Markup Language) adalah bahasa dasar yang
                  dipakai untuk menampilkan teks, gambar, dan berbagai konten
                  lainnya di internet.
                </p>
                <p className="mt-10">
                  Di artikel ini, kita bakal jalan bareng-bareng belajar HTML
                  dari nol. Tenang, nggak perlu jadi jago coding dulu buat
                  ngerti, karena HTML itu simpel dan asyik dipelajari!
                </p>
                <p className="mt-10">
                  Di artikel ini, kita bakal jalan bareng-bareng belajar HTML
                  dari nol. Tenang, nggak perlu jadi jago coding dulu buat
                  ngerti, karena HTML itu simpel dan asyik dipelajari!
                </p>
                {/* Tambahkan konten lainnya di sini */}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-16 p-2 rounded-3xl border border-neutral-200 mx-8 px-4">
            <button className="p-2 rounded-md flex items-center">
              <AiFillCaretLeft className="mr-2" /> Sebelumnya
            </button>
            <button className="p-2 rounded-md flex items-center">
              Selanjutnya <AiFillCaretRight className="ml-2" />
            </button>
          </div>
        </div>

        <Sidebar open={open} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default CardModul;
