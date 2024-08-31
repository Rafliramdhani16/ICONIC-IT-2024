import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./CardDummy";

const CardSection = ({
  title,
  cards,
  scrollRef,
  activeIndex,
  scrollLeft,
  scrollRight,
  handleCardClick,
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-4 pr-8 snap-x snap-mandatory scrollbar-hide"
        >
          {cards.map((card) => (
            <Card
              key={card.id || card.uuid}
              card={card}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 mb-10">
        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 ${
                index === activeIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
              } rounded-full transition-all duration-300 ease-in-out`}
            ></span>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110 active:scale-95"
          >
            <FaChevronLeft className="animate-pulse" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-110 active:scale-95"
          >
            <FaChevronRight className="animate-pulse" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSection;
