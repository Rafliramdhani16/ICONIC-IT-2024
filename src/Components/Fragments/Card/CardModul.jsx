import React from "react";
import { IoPlayCircleOutline, IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardModul = ({ data }) => {
  return (
    <div className="w-[75%] mx-auto my-10 p-6">
      <h2 className="text-2xl font-semibold mb-4">Pembelajaran</h2>
      <div className="overflow-y-auto h-[450px] custom-scrollbar border rounded-xl shadow-md px-4 py-6">
        {data.modul.map((item, index) => (
          <div key={item.uuid}>
            <Link
              to={item.unlock ? `/materi/${data.uuid}/${item.uuid}` : "#"}
              onClick={(e) => {
                if (!item.unlock) {
                  e.preventDefault(); // Mencegah navigasi jika modul terkunci
                }
              }}
            >
              <div
                className={`flex items-center p-4 bg-white rounded-lg shadow mb-3 hover:shadow-md transition-shadow duration-300 hover:border-2 border-neutral-200 ${
                  !item.unlock && "opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="flex-shrink-0 border rounded-lg w-10 h-10 flex items-center justify-center text-lg font-bold text-black mr-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <img
                  src={item.cover}
                  alt={item.modul}
                  className="w-8 h-8 object-cover rounded-lg mr-4"
                />
                <div className="flex-grow ml-4">
                  <h3 className="text-lg font-medium">{item.modul}</h3>
                </div>
                {item.unlock ? (
                  <IoPlayCircleOutline className="text-blue-500 w-8 h-8 hover:text-blue-600" />
                ) : (
                  <IoLockClosed className="text-gray-500 w-8 h-8" />
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardModul;
