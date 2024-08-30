import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../Elements/Modal/ModalCheck";
import {
  FaBookOpen,
  FaLock,
  FaArrowLeft,
  FaBook,
  FaClock,
} from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiCertificate } from "react-icons/pi";

const DetailMateri = ({ data, joined, onUnlock }) => {
  const [sessionData, setSessionData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = sessionStorage.getItem("oneTimeSession");
    if (session) {
      setSessionData(JSON.parse(session));
      sessionStorage.removeItem("oneTimeSession");
    }
  }, []);

  const handleStartLearning = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      await onUnlock();
      setIsModalOpen(false);
      if (data.modul && data.modul.length > 0) {
        navigate(`/materi/${data.uuid}/${data.modul[0].uuid}`);
      }
    } catch (error) {
      console.error("Materi Terkunci", error);
    }
  };

  const renderButton = () => {
    const buttons = [];

    if (!joined) {
      buttons.push(
        <button
          key="learn"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-300 flex items-center justify-center w-full sm:w-auto transform hover:scale-105"
          onClick={handleStartLearning}
        >
          <FaLock className="mr-2" /> Belajar Sekarang
        </button>
      );
    } else if (data.modul && data.modul.length > 0) {
      const firstModule = data.modul[0];
      buttons.push(
        <button
          key="start"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-300 flex items-center justify-center w-full sm:w-auto transform hover:scale-105"
          onClick={() => navigate(`/materi/${data.uuid}/${firstModule.uuid}`)}
        >
          <FaBookOpen className="mr-2" /> Mulai Belajar
        </button>
      );
    }

    if (sessionData) {
      buttons.push(
        <button
          key="certificate"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4 ml-2 transition duration-300 flex items-center justify-center w-full sm:w-auto transform hover:scale-105"
          onClick={() => window.open(sessionData.sertifikatUrl, "_blank")}
        >
          <PiCertificate className="mr-2" /> Download Sertifikat
        </button>
      );
    }

    return buttons;
  };

  return (
    <div
      className="bg-neutral-200 w-full sm:py-8 min-h-screen -mt-10 flex items-center justify-center"
      style={{
        backgroundImage: "url(/topography.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto px-4 sm:px-8 bg-white rounded-xl relative pb-8 pt-2 shadow-md">
        <div className="flex justify-between mt-4">
          <button
            className="font-bold transition duration-300 flex items-center transform hover:scale-105 mb-4"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="mr-2" /> Kembali
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-full md:w-1/3 h-48 sm:h-60 mt-4 sm:mt-8">
            <img
              src={data.cover}
              alt={data.materi}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="rounded-lg flex-1 p-2 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-start">
              {data.materi}
            </h1>
            {data.lanjutan ? (
              <p className="mb-2 sm:mb-4 font-bold">Materi Lanjutan</p>
            ) : (
              <p className="mb-2 sm:mb-4 font-bold">Materi Dasar</p>
            )}
            <div className="mt-2 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-6">
              <p className="text-sm sm:text-lg flex items-center">
                <HiOutlineUsers className="mr-2 text-neutral-500" />
                {data.jumlah_siswa ? (
                  <span>{data.jumlah_siswa} Siswa</span>
                ) : (
                  "Jumlah siswa tidak tersedia"
                )}
              </p>
              <p className="text-sm sm:text-lg flex items-center">
                <FaBook className="mr-2 text-neutral-500" />
                {data.jumlah_modul ? (
                  <span>{data.jumlah_modul} Modul</span>
                ) : (
                  "5 Modul"
                )}
              </p>
              <p className="text-sm sm:text-lg flex items-center">
                <FaClock className="mr-2 text-white bg-neutral-500 p-0.5 rounded-full" />
                {data.waktu ? <span>{data.waktu} Menit</span> : "5 Menit"}
              </p>
            </div>
            <p className="text-justify text-sm sm:text-lg mt-2 sm:mt-4">
              {data.deskripsi}
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end mt-4 flex-wrap">
          {renderButton()}
        </div>
        <ConfirmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
        />
      </div>
    </div>
  );
};

export default DetailMateri;
