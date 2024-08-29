import React from "react";

const SkeletonModul = () => {
  return (
    <div className="w-[75%] mx-auto my-10 p-6">
      <h2 className="text-2xl font-semibold mb-4 skeleton rounded-lg h-5 w-64"></h2>
      <div className=" h-[450px] border rounded-xl shadow-md px-4 py-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="skeleton mb-3 flex items-center p-4 bg-white rounded-lg shadow"
          >
            <div className="flex-shrink-0 border rounded-lg w-10 h-10 flex items-center justify-center text-lg font-bold text-black mr-4 skeleton"></div>
            <div className="w-8 h-8 object-cover rounded-lg mr-4 skeleton"></div>
            <div className="flex-grow ml-4">
              <h3 className="text-lg font-medium skeleton"></h3>
            </div>
            <div className="text-gray-500 w-8 h-8 skeleton"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonModul;
