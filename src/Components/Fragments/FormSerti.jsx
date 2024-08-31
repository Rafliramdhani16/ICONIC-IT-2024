import React from "react";
import { format } from "date-fns";
import { useSertifikat } from "../../Hook/HookGetSerti";
import { FaDownload } from "react-icons/fa";
import SkeSerti from "../Elements/Skeleton/SkeSerti";

const SertifikatCard = () => {
  const { sertifikat, loading, error } = useSertifikat();

  if (error) {
    return <p className="text-center text-red-600">Error: {error.message}</p>;
  }

  if (loading) {
    return (
      <div>
        <SkeSerti />
      </div>
    );
  }

  if (sertifikat.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <div className="rounded-lg text-center">
          <img
            src="/sertifikat.svg"
            alt="Belum ada sertifikat"
            className="w-96 h-96 md:w-80 md:h-80 mx-auto mb-4"
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
    <div className="w-full md:w-[90%] mx-auto my-5 md:my-10 px-4 md:px-0 mt-14">
      <div>
        {sertifikat.map((item, index) => (
          <div key={item.uuid} className="module-item flex items-center mb-3">
            <div className="flex items-center p-3 md:p-4 bg-white rounded-lg border border-neutral-200 shadow-sm flex-grow">
              <div className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center text-lg font-bold text-black mr-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <img
                src={item.materi[0].cover}
                alt={item.materi[0].materi}
                className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-lg mr-3 md:mr-4"
              />
              <div className="flex-grow ml-2 md:ml-4">
                <h3 className="text-sm md:text-lg font-medium">
                  {item.materi[0].materi}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Diterbitkan:{" "}
                  {format(new Date(item.created_at), "dd MMMM yyyy")}
                </p>
              </div>
              <a
                href={item.sertifikat}
                download
                className="ml-2 md:ml-4 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 group"
              >
                <FaDownload className="mr-1 md:mr-2 group-hover:animate-bounce" />
                <span className="hidden md:inline">Download</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SertifikatCard;
