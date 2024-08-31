const SertifikatCardSkeleton = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto my-5 md:my-10 px-4 md:px-0 mt-14">
      <div>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="module-item flex items-center mb-3">
            <div className="flex items-center p-3 md:p-4 bg-white rounded-lg border border-neutral-200 shadow-sm flex-grow">
              <div className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center text-lg font-bold text-black mr-4">
                <div className="bg-gray-200 w-8 h-8 rounded-full animate-pulse"></div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-lg mr-3 md:mr-4 animate-pulse"></div>
              <div className="flex-grow ml-2 md:ml-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
              <div className="ml-2 md:ml-4 bg-gray-200 w-16 h-8 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SertifikatCardSkeleton;
