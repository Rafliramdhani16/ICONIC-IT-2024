import React from "react";

const SkeletonCardMateri = () => {
  const renderSkeletonCards = () => (
    <div className="flex space-x-4">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="relative min-w-[300px] h-[400px] bg-gray-200 rounded-3xl shadow-md p-4 flex flex-col items-start"
        >
          <div className="w-full h-[200px] skeleton rounded-md mb-4"></div>
          <div className="w-3/4 h-6 skeleton rounded mb-2"></div>
          <div className="w-1/2 h-4 skeleton rounded mb-2"></div>
          <div className="w-1/2 h-4 skeleton rounded mb-2"></div>
          <div className="w-1/2 h-4 skeleton rounded"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto my-14 w-[80%]">
      <div className="mb-10">
        <div className="w-1/4 h-8 skeleton rounded"></div>
      </div>
      {renderSkeletonCards()}
      <div className="mt-10 mb-10">
        <div className="w-1/4 h-8 skeleton rounded"></div>
      </div>
      {renderSkeletonCards()}
    </div>
  );
};

export default SkeletonCardMateri;
