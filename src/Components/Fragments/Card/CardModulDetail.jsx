import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useCheckModul } from "../../../Hook/HookCheckModul";
import ModalNextModul from "../../Elements/Modal/ModalNextModul";
import { useKlaimSertifikat } from "../../../Hook/HookClaimSertifikat";

const ModulDetail = ({
  modulDetail,
  data,
  children,
  open,
  onNextModule,
  onPrevModule,
}) => {
  const { sertifikatData, klaimSertifikat } = useKlaimSertifikat();
  const navigate = useNavigate();
  const { materiId } = useParams();
  const { handleCheckModul, loading, error } = useCheckModul();
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState({
    tombol: "",
    response: "",
  });
  const [titlebtn, setTitlebtn] = useState("");
  const [closebtn, setClosebtn] = useState("");
  const [confirmbtn, setConfirmbtn] = useState("");
  const [message, setMessage] = useState("");

  const tombolNextModul = async () => {
    const result = await handleCheckModul(modulDetail.uuid);
    if (result && result.success === 200) {
      await onNextModule(modulDetail.uuid).then((response) => {
        if (response !== false) {
          setTitlebtn("Konfirmasi Pemahaman!");
          setClosebtn("Belum");
          setConfirmbtn("Sudah");
          setMessage("Apakah Anda sudah memahami materi pada modul ini?");
          setResponse([response, "next"]);
        } else {
          setTitlebtn("Konfirmasi Pemahaman!");
          setClosebtn("Belum");
          setConfirmbtn("Klaim Sertifikat");
          setMessage(
            `Apakah Anda sudah memahami materi pada modul ini? Jika sudah, silahkan klaim sertifikat jika belum`
          );
          setResponse([response, "finish"]);
        }
        setShowModal(true);
      });
    }
  };

  const handlePrevModule = async () => {
    const result = await handleCheckModul(modulDetail.uuid);
    if (result && result.success === 200) {
      onPrevModule(modulDetail.uuid);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    const arrayModul = data.modul.findIndex(
      (modul) => modul.uuid === modulDetail.uuid
    );

    if (response[1] === "next") {
      const nextIndex = arrayModul + 1;
      navigate(`/materi/${materiId}/${data.modul[nextIndex].uuid}`);
    } else if (response[1] === "finish") {
      klaimSertifikat(materiId)
        .then((response) => {
          if (response && response.sertifikat) {
            sessionStorage.setItem(
              "oneTimeSession",
              JSON.stringify({
                sertifikatUrl: response.sertifikat,
                materiId: materiId,
              })
            );

            navigate(`/materi/${materiId}`);
          } else {
            console.error("Data sertifikat tidak tersedia.");
          }
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat klaim sertifikat:", error);
        });
    }

    setShowModal(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center p-3 sm:p-5 bg-white border-b border-neutral-300 shadow-sm">
        <button
          className="flex items-center transition-transform duration-300 transform hover:scale-105"
          onClick={() => navigate("/materi/" + materiId)}
        >
          <BiArrowBack className="text-xl sm:text-2xl text-neutral-800" />
          <p className="text-base sm:text-xl font-semibold ml-2 truncate">
            {modulDetail.modul}
          </p>
        </button>
      </nav>

      <div className="pt-16 sm:pt-20 px-4 sm:px-8 flex flex-col lg:flex-row">
        <div
          className={`bg-white p-4 sm:p-6 rounded-xl border-2 border-neutral-100 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] transition-all duration-300 ${
            open ? "mr-12 lg:mr-0 lg:w-[calc(100%-390px)]" : "w-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              <div className="prose prose-sm sm:prose lg:prose-lg max-w-none prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">
                <article
                  className="xl:w-full pr-5 "
                  dangerouslySetInnerHTML={{ __html: modulDetail.detail }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center p-2 rounded-3xl border border-neutral-200 mt-4 mr-7">
              <button
                className="p-2 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105"
                onClick={handlePrevModule}
                disabled={loading}
              >
                <AiFillCaretLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="ml-1 text-sm sm:text-base">
                  {loading ? "Loading..." : "Sebelumnya"}
                </span>
              </button>
              <div className="text-sm sm:text-lg font-semibold mx-2 truncate">
                {modulDetail.modul}
              </div>
              <button
                className="p-2 rounded-md flex items-center transition-transform duration-300 transform hover:scale-105"
                onClick={tombolNextModul}
                disabled={loading}
              >
                <span className="mr-1 text-sm sm:text-base">
                  {loading ? "Loading..." : "Selanjutnya"}
                </span>
                <AiFillCaretRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {children}
      </div>

      <ModalNextModul
        title={titlebtn}
        closebtn={closebtn}
        confirmbtn={confirmbtn}
        message={message}
        isOpen={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default ModulDetail;
