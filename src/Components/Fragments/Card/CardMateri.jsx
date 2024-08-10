import React from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const CardMateri = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="relative mt-[-100px] z-10 flex justify-around items-center bg-white rounded-3xl shadow-md w-[70%] mx-auto border border-neutral-300 py-4">
      <div className="flex flex-row justify-center items-center">
        <button
          onClick={() => handleNavigate("/materi-html")}
          className="flex flex-row justify-center items-center border-2 border-neutral-300 w-[220px] h-[65px] bg-white rounded-xl hover:bg-gray-200 transition shadow-md mx-5"
        >
          <img src="/html.png" alt="Materi HTML" className="w-12 h-12 mr-4" />
          <p className="text-center">Materi HTML</p>
        </button>

        <button
          onClick={() => handleNavigate("/materi-css")}
          className="flex flex-row justify-center items-center border-2 border-neutral-300 w-[220px] h-[65px] bg-white rounded-xl hover:bg-gray-200 transition shadow-md mx-5"
        >
          <img src="/css.png" alt="Materi CSS" className="w-12 h-12 mr-4" />
          <p className="text-center">Materi CSS</p>
        </button>

        <button
          onClick={() => handleNavigate("/materi-javascript")}
          className="flex flex-row justify-center items-center border-2 border-neutral-300 w-[220px] h-[65px] bg-white rounded-xl hover:bg-gray-200 transition shadow-md mx-5"
        >
          <img
            src="/js.png"
            alt="Materi JavaScript"
            className="w-12 h-12 mr-2"
          />
          <p className="text-center">Materi Javascript</p>
        </button>

        <button
          onClick={() => handleNavigate("/semua-materi")}
          className="flex flex-row justify-center items-center border-2 border-neutral-300 w-[220px] h-[65px] bg-white rounded-xl hover:bg-gray-200 transition shadow-md mx-5"
        >
          <CgMenuGridR className="text-4xl mr-4" />
          <p className="text-center">Semua Materi</p>
        </button>
      </div>
    </div>
  );
};

export default CardMateri;
