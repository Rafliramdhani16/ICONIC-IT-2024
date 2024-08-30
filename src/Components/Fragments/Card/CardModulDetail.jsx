import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCheckModul } from "../../../Hook/HookCheckModul";
import ModalNextModul from "../../Elements/Modal/ModalNextModul";

const ModulDetail = ({
  modulDetail,
  children,
  open,
  onNextModule,
  onPrevModule,
}) => {
  const navigate = useNavigate();
  const { handleCheckModul, loading, error } = useCheckModul();
  const [showModal, setShowModal] = useState(false);

  const handleNextModule = async () => {
    const result = await handleCheckModul(modulDetail.uuid);
    if (result && result.success === 200) {
      if (result.message === "Sukses! Sudah membaca modul") {
        setShowModal(true); // Show modal for confirmation
      } else if (result.message === "Sukses! Pernah membaca modul") {
        onNextModule(modulDetail.uuid); // Proceed to next module directly
      }
    } else {
      console.error("Error checking modul:", error || "Unknown error");
    }
  };

  const handlePrevModule = async () => {
    const result = await handleCheckModul(modulDetail.uuid);
    if (result && result.success === 200) {
      onPrevModule(modulDetail.uuid); // Go to previous module
    } else {
      console.error("Error checking modul:", error || "Unknown error");
    }
  };

  const handleConfirm = () => {
    setShowModal(false); // Close modal
    onNextModule(modulDetail.uuid); // Proceed to next module
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal without proceeding
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center p-5 bg-white border-b border-neutral-300 shadow-sm">
        <button
          className="flex items-center transition-transform duration-300 transform hover:scale-105"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack className="text-2xl text-neutral-800 h-6 w-6" />
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
            <div className="flex-grow overflow-y-auto custom-scrollbar overflow-x-hidden">
              <div className="flex mb-4">
                <div className="ml-8 mt-4 w-full">
                  <div className="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600 mr-4">
                    <article
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: modulDetail.detail }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-2 rounded-3xl border border-neutral-200 mt-4">
              <button
                className="p-2 rounded-md flex items-center"
                onClick={handlePrevModule}
                disabled={loading}
              >
                <AiFillCaretLeft className="mr-2 w-5 h-5" />
                {loading ? "Loading..." : "Sebelumnya"}
              </button>
              <div className="text-lg font-semibold mx-auto">
                {modulDetail.modul}
              </div>
              <button
                className="p-2 rounded-md flex items-center"
                onClick={handleNextModule}
                disabled={loading}
              >
                {loading ? "Loading..." : "Selanjutnya"}
                <AiFillCaretRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {children}
      </div>

      <ModalNextModul
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default ModulDetail;
