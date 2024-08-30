import React from "react";

// Skeleton Component
const Skeleton = () => {
  return (
    <div className="mx-auto w-[80%] mt-[100px]">
      {" "}
      <div className="animate-pulse bg-white rounded-lg shadow-md p-4 mb-6 ">
        <div className="flex justify-between mb-4">
          <div className="h-6 w-1/4 bg-gray-300 rounded skeleton"></div>
          <div className="h-6 w-1/4 bg-gray-300 rounded skeleton"></div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded skeleton"></div>
          <div className="flex-1 p-4">
            <div className="h-8 w-3/4 bg-gray-300 rounded mb-4 skeleton"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded mb-2 skeleton"></div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-6 w-1/4 bg-gray-300 rounded skeleton"></div>
              <div className="h-6 w-1/4 bg-gray-300 rounded skeleton"></div>
              <div className="h-6 w-1/4 bg-gray-300 rounded skeleton"></div>
            </div>
            <div className="h-20 bg-gray-300 rounded mt-4 skeleton"></div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="h-10 w-32 bg-gray-300 rounded skeleton"></div>
        </div>
      </div>
    </div>
  );
};

// SkeletonModul Component
const SkeletonModul = () => {
  return (
    <div className="w-[75%] mx-auto my-10 p-6">
      <h2 className="text-2xl font-semibold mb-4 skeleton rounded-lg h-5 w-64"></h2>
      <div className="h-[450px] border rounded-xl shadow-md px-4 py-6">
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

// Main Combined Skeleton Component
const CombinedSkeleton = () => {
  return (
    <div>
      <Skeleton />
      <SkeletonModul />
    </div>
  );
};

export default CombinedSkeleton;
