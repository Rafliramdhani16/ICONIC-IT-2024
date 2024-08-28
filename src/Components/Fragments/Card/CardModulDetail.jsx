import React from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ModulDetail = ({ modulDetail, children, open }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center p-5 bg-white border-b border-neutral-300 shadow-sm">
        <button
          className="flex items-center"
          onClick={() => navigate(`/materi/${modulDetail.id_materi}`)}
        >
          <BiArrowBack className="text-2xl text-neutral-800" />
          <p className="text-xl font-semibold ml-2">{modulDetail.modul}</p>
        </button>
      </nav>

      <div className="pt-20 px-8 flex">
        <div
          className={`bg-white p-6 rounded-xl border-2 border-neutral-100 h-[calc(100vh-5rem)] transition-all duration-300 ${
            open ? "w-[calc(100%-390px)]" : "w-[98%]"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              <div className="flex mb-4">
                <div className="ml-8 mt-4 w-full">
                  <div className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
                    <article
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: modulDetail.detail }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-2 rounded-3xl border border-neutral-200 mt-4">
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
        </div>

        {children}
      </div>
    </>
  );
};

export default ModulDetail;
