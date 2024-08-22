import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useLastestMateri from "../../../Hook/HookNews";
import SkeletonCardNews from "../../Elements/Skeleton/SkeCardNews";

const CardNews = () => {
  const { materi, loading, error } = useLastestMateri();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newIndex = Math.max(activeIndex - 1, 0);
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newIndex = Math.min(activeIndex + 1, materi.length - 1);
      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * 300,
        behavior: "smooth",
      });
    }
  };

  if (loading)
    return (
      <div>
        <SkeletonCardNews />
      </div>
    );
  if (error)
    return (
      <div>
        <SkeletonCardNews />
      </div>
    );

  return (
    <div className="relative w-[80%] mx-auto mt-14">
      <h2 className="text-lg font-bold mb-4">Terbaru dari GYANAKAYA</h2>
      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4 pr-8 snap-x snap-mandatory scrollbar-hide"
        >
          {materi.map((item, index) => (
            <div
              key={item.uuid}
              className="min-w-[300px] h-[150px] bg-gray-300 rounded-lg snap-center relative group cursor-pointer overflow-hidden"
            >
              <img
                src={item.cover}
                alt={item.materi}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">{item.materi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          {materi.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              } rounded-full`}
            ></span>
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
