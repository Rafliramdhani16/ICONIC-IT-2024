import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import useFetchReviews from "../../../Hook/HookAbout";
import SkeletonAbout from "../../Elements/Skeleton/SkeCardAbout";

const CardAbout = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: cards, loading, error } = useFetchReviews();

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
    if (scrollRef.current && cards.length) {
      const newIndex = Math.min(activeIndex + 1, cards.length - 1);
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
        <SkeletonAbout />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative w-[80%] mx-auto my-14">
      <h2 className="text-lg font-bold mb-14">Kata mereka tentang GYANAKAYA</h2>
      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4 pr-8 snap-x snap-mandatory scrollbar-hide space-y-10 -mt-11"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative min-w-[270px] h-[250px] bg-gray-300 rounded-[25px] snap-center flex flex-col items-center justify-center p-4 mt-10"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.nama}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                ) : (
                  <FaUser className="w-16 h-16 rounded-full bg-white p-2 shadow-lg border border-gray-300" />
                )}
              </div>
              <div className="text-center h-full mt-8">
                <h3 className="text-lg font-bold">{card.nama}</h3>
                <p className="text-center text-sm leading-relaxed mt-3">
                  {card.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          {cards.map((_, index) => (
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

export default CardAbout;
