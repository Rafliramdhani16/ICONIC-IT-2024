import React from "react";
import { format } from "date-fns";
import { useSertifikat } from "../../Hook/HookGetSerti";
import { FaEye } from "react-icons/fa";

const SertifikatCard = () => {
  const { sertifikat, loading, error } = useSertifikat();

  if (error) {
    return <p className="text-center text-red-600">Error: {error.message}</p>;
  }

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (sertifikat.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <div className="rounded-lg p-6 text-center">
          <img
            src="/sertifikat.svg"
            alt="Belum ada sertifikat"
            className="w-96 h-96 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Belum ada sertifikat
          </h2>
          <p className="text-lg text-gray-600">
            Silahkan pelajari modul untuk mendapatkan sertifikat!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sertifikat.map((item) => (
          <div
            key={item.uuid}
            className="bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={item.materi[0].cover}
              alt={item.materi[0].materi}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {item.materi[0].materi}
              </h3>
              <p className="text-gray-600 mb-4">
                Diterbitkan: {format(new Date(item.created_at), "dd MMMM yyyy")}
              </p>
              <a
                href={item.sertifikat}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                <span className="flex justify-center items-center gap-1">
                  <FaEye /> Lihat sertifikat
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SertifikatCard;
