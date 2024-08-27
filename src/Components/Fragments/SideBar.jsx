import React from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { useModulDetail } from "../../Hook/HookModulD";
import { useParams } from "react-router-dom";
import SkeSideBar from "../Elements/Skeleton/SkeSideBar";

const Sidebar = ({ open, toggleSidebar }) => {
  const { materiId, modulId } = useParams();
  const { modulDetail, loading, error } = useModulDetail(materiId, modulId);

  if (loading) {
    return (
      <div>
        <SkeSideBar />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`fixed top-[80px] right-0 h-[calc(100%-100px)] bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out rounded-l-3xl ${
        open
          ? "translate-x-0 lg:w-[390px]"
          : "translate-x-[calc(100%-3rem)] lg:w-12"
      }`}
    >
      <div className="flex flex-col p-4 bg-white rounded-tl-3xl">
        <div className="flex items-center text-black mb-4">
          <button onClick={toggleSidebar} className="mr-4">
            {open ? (
              <AiFillRightCircle className="h-7 w-7" />
            ) : (
              <AiFillLeftCircle className="h-7 w-7" />
            )}
          </button>
          {open && modulDetail && (
            <h2 className="text-xl font-semibold">
              ID Materi: {modulDetail.id_materi}
            </h2>
          )}
        </div>

        {open && (
          <>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <p className="text-gray-600 text-xs mt-1">50% Selesai</p>
          </>
        )}
      </div>

      {open && (
        <ul className="p-4">
          <li className="relative flex items-center py-2">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-white border-[3px] border-blue-500 rounded-full z-10"></div>{" "}
              <div className="h-full w-[2px] bg-blue-500 absolute top-3 left-[5px]"></div>{" "}
            </div>
            <div className="ml-6 px-4 py-2 bg-blue-500 text-white rounded-md w-full cursor-pointer">
              Pengenalan HTML
            </div>
          </li>
          <li className="relative flex items-center py-2">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full z-10"></div>{" "}
              <div className="h-full w-[2px] bg-gray-300 absolute top-0 left-[5px]"></div>{" "}
            </div>
            <div className="ml-6 px-4 py-2 text-gray-500 hover:bg-blue-100 rounded-md w-full cursor-pointer">
              Buat HTML
            </div>
          </li>
          <li className="relative flex items-center py-2">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full z-10"></div>{" "}
            </div>
            <div className="ml-6 px-4 py-2 text-gray-500 hover:bg-blue-100 rounded-md w-full cursor-pointer">
              Buat HTML
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
