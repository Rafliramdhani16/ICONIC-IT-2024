import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCheckModul } from "../../../Hook/HookCheckModul";

const ModulDetail = ({
  modulDetail,
  modules,
  children,
  open,
  onNextModule,
}) => {
  const navigate = useNavigate();
  const { handleCheckModul, loading, error } = useCheckModul();
  const [showPopup, setShowPopup] = useState(false);

  const handleNextModule = async () => {
    const result = await handleCheckModul(modulDetail.id);
    if (result && result.status === 200) {
      if (result.message === "Sukses! Sudah membaca modul") {
        setShowPopup(true);
      } else if (result.message === "Sukses! Pernah membaca modul") {
        // Directly move to the next module
        onNextModule(modulDetail.id);
      }
    } else {
      // Handle error
      console.error("Error checking modul:", error || "Unknown error");
    }
  };

  const handleUnderstandClick = () => {
    onNextModule(modulDetail.id);
    setShowPopup(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center p-5 bg-white border-b border-neutral-300 shadow-sm">
        <button className="flex items-center" onClick={() => navigate(-1)}>
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
              <button
                className="p-2 rounded-md flex items-center"
                onClick={handleNextModule}
                disabled={loading}
              >
                {loading ? "Loading..." : "Selanjutnya"}{" "}
                <AiFillCaretRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {children}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Apakah Anda sudah paham?</h2>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded mr-2"
                onClick={handleUnderstandClick}
              >
                Ya
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setShowPopup(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModulDetail;
