import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="fixed top-[80px] right-0 h-[calc(100%-100px)] bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out rounded-l-3xl lg:w-[390px]">
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
  );
};

export default SidebarSkeleton;
