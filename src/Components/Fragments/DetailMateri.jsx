import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../Elements/Modal/ModalCheck";
import { FaBookOpen, FaLock, FaArrowLeft } from "react-icons/fa"; // Importing icons from react-icons

const DetailMateri = ({ data, joined, onUnlock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
    if (!joined) {
      return (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg mt-4 transition duration-300 flex items-center transform hover:scale-105"
          onClick={handleStartLearning}
        >
          <FaLock className="mr-2" /> Belajar Sekarang
        </button>
      );
    } else if (data.modul && data.modul.length > 0) {
      const firstModule = data.modul[0];
      return (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-300 flex items-center transform hover:scale-105"
          onClick={() => navigate(`/materi/${data.uuid}/${firstModule.uuid}`)}
        >
          <FaBookOpen className="mr-2" /> Mulai Belajar
        </button>
      );
    }
    return null;
  };

  return (
    <div className="w-[80%] mx-auto px-8 bg-white rounded-lg relative">
      <div className="flex justify-between mt-4">
        <button
          className=" font-bold transition duration-300 flex items-center transform hover:scale-105 mb-4"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Kembali
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-start">{data.materi}</h1>
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full md:w-1/3 h-60">
          <img
            src={data.cover}
            alt={data.materi}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="bg-blue-500 rounded-lg shadow-md text-white flex-1 p-6">
          <p className="text-justify text-lg">{data.deskripsi}</p>
          {data.lanjutan && <p className="mt-4 font-bold">Materi Lanjutan</p>}
          {!data.lanjutan && <p className="mt-4 font-bold">Materi Dasar</p>}
        </div>
      </div>
      <div className="flex justify-between mt-4">{renderButton()}</div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default DetailMateri;
