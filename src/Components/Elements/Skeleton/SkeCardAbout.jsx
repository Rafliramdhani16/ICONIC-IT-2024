import React from "react";

const SkeletonCardAbout = () => {
  return (
    <div className="relative w-[80%] mx-auto my-14">
      <h2 className="text-lg font-bold mb-14 skeleton w-64 h-6"></h2>
      <div className="relative flex items-center">
        <div className="flex overflow-hidden space-x-4 pr-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="relative min-w-[270px] h-[250px] bg-gray-300 rounded-[25px] flex flex-col items-center justify-center p-4 mt-10"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full skeleton"></div>
              </div>
              <div className="text-center h-full mt-8 w-full">
                <div className="skeleton w-3/4 h-4 mx-auto mb-3"></div>
                <div className="skeleton w-full h-3 mb-2"></div>
                <div className="skeleton w-full h-3 mb-2"></div>
                <div className="skeleton w-3/4 h-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <span
              key={index}
              className="w-3 h-3 bg-gray-300 rounded-full"
            ></span>
          ))}
        </div>

        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardAbout;
