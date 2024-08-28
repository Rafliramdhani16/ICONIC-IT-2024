import React from "react";

const SkeletonModulDetail = () => {
  return (
    <div className="bg-white p-6 rounded-xl border-2 border-neutral-100 mx-8 h-[95dvh] relative">
      <nav className="flex items-center p-5 border-b border-neutral-300 shadow-sm rounded-b-3xl mb-6">
        <div className="flex items-center">
          <div className="skeleton w-8 h-8 rounded-full"></div>
          <div className="skeleton w-40 h-6 ml-2"></div>
        </div>
      </nav>

      <div className="flex">
        <div className="flex-1 pr-[400px]">
          <div className="flex">
            <div className="skeleton w-96 h-64 rounded-lg"></div>
            <div className="ml-8 mt-4 w-full">
              <div className="skeleton w-full h-4 mb-2"></div>
              <div className="skeleton w-full h-4 mb-2"></div>
              <div className="skeleton w-3/4 h-4"></div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-[470px] mb-10 p-2  rounded-3xl border border-neutral-200 mx-8 px-4">
            <div className="skeleton w-32 h-8 rounded-md"></div>
            <div className="skeleton w-40 h-6 mx-auto"></div>
            <div className="skeleton w-32 h-8 rounded-md"></div>
          </div>
        </div>

        <div className="fixed top-[80px] right-8 h-[calc(100%-100px)] bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out rounded-l-3xl w-[390px]">
          <div className="flex flex-col p-4 bg-white rounded-tl-3xl">
            <div className="flex items-center mb-4">
              <div className="skeleton w-7 h-7 rounded-full"></div>
              <div className="skeleton w-40 h-6 ml-4 rounded"></div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
              <div
                className="skeleton h-full bg-blue-500 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="skeleton w-20 h-4 rounded"></div>
          </div>
          <ul className="p-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className="flex items-center py-2">
                <div className="skeleton w-3 h-3 rounded-full mr-6"></div>
                <div className="skeleton w-full h-6 rounded-md"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkeletonModulDetail;
