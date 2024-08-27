import React from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CardModul = ({ modulDetail, children }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex items-center p-5 border-b border-neutral-300 shadow-sm rounded-b-3xl">
        <button
          className="flex items-center"
          onClick={() => navigate(`/detailMateri/${modulDetail.id_materi}`)}
        >
          <BiArrowBack className="text-2xl text-neutral-800" />
          <p className="text-xl font-semibold ml-2">{modulDetail.modul}</p>
        </button>
      </nav>

      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 p-6 lg:pr-[400px]">
          <div className="bg-white p-6 rounded-xl border-2 border-neutral-100 mx-8 h-[75dvh]">
            <div className="flex">
              <img
                src={modulDetail.cover}
                alt={modulDetail.modul}
                className="max-w-2xl max-h-96 rounded-lg"
              />
              <div className="ml-8 mt-4 w-full">
                <p>{modulDetail.detail}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-16 p-2 rounded-3xl border border-neutral-200 mx-8 px-4">
            <button className="p-2 rounded-md flex items-center">
              <AiFillCaretLeft className="mr-2 w-5 h-5" /> Sebelumnya
            </button>
            <div className="text-lg font-semibold mx-auto">
              {modulDetail.modul}
            </div>
            <button className="p-2 rounded-md flex items-center">
              Selanjutnya <AiFillCaretRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default CardModul;
