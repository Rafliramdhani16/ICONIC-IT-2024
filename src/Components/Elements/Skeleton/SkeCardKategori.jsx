const SkeletonKategori = () => {
  return (
    <div className="relative mt-[-100px] z-10 flex justify-center items-center bg-white rounded-3xl shadow-md w-[80%] mx-auto border border-neutral-300 py-5">
      <div className="flex flex-row justify-center items-center w-full">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center border-2 border-neutral-300 w-full h-[65px] bg-gray-300 rounded-xl mx-8 skeleton"
            >
              <div className="w-12 h-12 mr-4 bg-gray-200 rounded-full skeleton"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3 skeleton"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkeletonKategori;
