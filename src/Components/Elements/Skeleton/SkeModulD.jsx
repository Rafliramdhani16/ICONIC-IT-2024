const CardModulSkeleton = () => {
  return (
    <>
      <nav className="flex items-center p-5 border-b border-neutral-300 shadow-sm rounded-b-3xl">
        <div className="flex items-center">
          <div className="skeleton w-8 h-8 rounded-full"></div>
          <div className="skeleton w-40 h-6 ml-2"></div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row h-full">
        <div className="flex-1 p-6 lg:pr-[400px]">
          <div className="bg-white p-6 rounded-xl border-2 border-neutral-100 mx-8 h-[75dvh]">
            <div className="flex">
              <div className="skeleton w-96 h-64 rounded-lg"></div>
              <div className="ml-8 mt-4 w-full">
                <div className="skeleton w-full h-4 mb-2"></div>
                <div className="skeleton w-full h-4 mb-2"></div>
                <div className="skeleton w-3/4 h-4"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-16 p-2 rounded-3xl border border-neutral-200 mx-8 px-4">
            <div className="skeleton w-32 h-8 rounded-md"></div>
            <div className="skeleton w-40 h-6 mx-auto"></div>
            <div className="skeleton w-32 h-8 rounded-md"></div>
          </div>
        </div>

        <div className="skeleton w-[400px] h-full fixed right-0 top-0"></div>
      </div>
    </>
  );
};

export default CardModulSkeleton;
