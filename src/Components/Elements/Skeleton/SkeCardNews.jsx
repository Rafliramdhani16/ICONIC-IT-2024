import React from "react";

const SkeletonCardNews = () => {
  const skeletonCards = new Array(4).fill(0);
  return (
    <div className="relative w-[80%] mx-auto mt-14">
      <h2 className="text-lg font-bold mb-4 skeleton h-6 w-1/2 rounded-lg"></h2>
      <div className="relative flex items-center">
        <div className="flex overflow-hidden space-x-4 pr-8 snap-x snap-mandatory scrollbar-hide">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[150px] bg-gray-300 rounded-lg snap-center skeleton"
            ></div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          {skeletonCards.map((_, index) => (
            <span
              key={index}
              className="w-3 h-3 bg-gray-300 rounded-full skeleton"
            ></span>
          ))}
        </div>

        <div className="flex space-x-2">
          <div className="p-2 rounded-full bg-gray-300 shadow-lg skeleton w-8 h-8"></div>
          <div className="p-2 rounded-full bg-gray-300 shadow-lg skeleton w-8 h-8"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardNews;
