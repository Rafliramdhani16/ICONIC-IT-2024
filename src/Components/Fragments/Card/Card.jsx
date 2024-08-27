import React, { useRef, useState, useEffect } from "react";
import { FaUserFriends, FaRegClock, FaListAlt } from "react-icons/fa";

const Card = ({ card, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex-shrink-0 w-[270px] h-[335px] mx-4 my-10 bg-gray-100 rounded-3xl snap-center shadow-md p-4 flex flex-col items-start cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      onClick={() => onClick(card)}
    >
      <img
        src={card.cover || "/materi.png"}
        alt={`Thumbnail for ${card.materi}`}
        className="w-full h-[170px] object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{card.materi}</h3>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <FaUserFriends className="mr-2" />
        <span>{card.followers || "N/A"} pengikut</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <FaListAlt className="mr-2" />
        <span>{card.modul ? card.modul.length : 0} Modul</span>
      </div>
      <div className="flex items-center text-sm text-gray-500">
        <FaRegClock className="mr-2" />
        <span>{card.duration || "N/A"}</span>
      </div>
    </div>
  );
};

export default Card;
