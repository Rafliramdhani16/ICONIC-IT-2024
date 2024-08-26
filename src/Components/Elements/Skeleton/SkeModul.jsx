import React from "react";

const SkeletonModul = () => {
  return (
    <div className="w-[75%] mx-auto my-10 p-6 animate-pulse">
      <div className="h-8 skeleton rounded w-1/4 mb-4"></div>
      <div className=" h-[450px] border rounded-xl shadow-md px-4 py-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow mb-3"
          >
            <div className="flex-shrink-0 skeleton rounded-lg w-10 h-10 mr-4"></div>
            <div className="w-8 h-8 skeleton rounded-full mr-4"></div>
            <div className="flex-grow">
              <div className="h-5 skeleton rounded w-3/4 mb-2"></div>
            </div>
            <div className="w-8 h-8 skeleton rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonModul;
