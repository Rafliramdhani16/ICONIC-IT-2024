import React, { useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserFriends,
  FaRegClock,
  FaListAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardMateri = () => {
  const scrollRefDasar = useRef(null);
  const scrollRefLanjutan = useRef(null);
  const [activeIndexDasar, setActiveIndexDasar] = useState(0);
  const [activeIndexLanjutan, setActiveIndexLanjutan] = useState(0);
  const navigate = useNavigate();

  const scrollLeft = (type) => {
    if (type === "Dasar" && scrollRefDasar.current) {
      const newIndex = Math.max(activeIndexDasar - 1, 0);
      setActiveIndexDasar(newIndex);
      scrollRefDasar.current.scrollTo({
        left: newIndex * 390,
        behavior: "smooth",
      });
    } else if (type === "Lanjutan" && scrollRefLanjutan.current) {
      const newIndex = Math.max(activeIndexLanjutan - 1, 0);
      setActiveIndexLanjutan(newIndex);
      scrollRefLanjutan.current.scrollTo({
        left: newIndex * 390,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (type) => {
    if (type === "Dasar" && scrollRefDasar.current) {
      const newIndex = Math.min(activeIndexDasar + 1, dasarCards.length - 1);
      setActiveIndexDasar(newIndex);
      scrollRefDasar.current.scrollTo({
        left: newIndex * 390,
        behavior: "smooth",
      });
    } else if (type === "Lanjutan" && scrollRefLanjutan.current) {
      const newIndex = Math.min(
        activeIndexLanjutan + 1,
        lanjutanCards.length - 1
      );
      setActiveIndexLanjutan(newIndex);
      scrollRefLanjutan.current.scrollTo({
        left: newIndex * 390,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (card) => {
    navigate(`/detailMateri/${card.id}`);
  };
  const dasarCards = [
    {
      id: 1,
      title: "HTML Dasar",
      followers: "400 orang mengikuti",
      modules: "14 Modul",
      duration: "1 Jam 2 Menit",
      category: "Dasar",
    },
    {
      id: 2,
      title: "HTML Dasar",
      followers: "400 orang mengikuti",
      modules: "14 Modul",
      duration: "1 Jam 2 Menit",
      category: "Dasar",
    },
    {
      id: 3,
      title: "HTML Dasar",
      followers: "400 orang mengikuti",
      modules: "14 Modul",
      duration: "1 Jam 2 Menit",
      category: "Dasar",
    },
    {
      id: 4,
      title: "HTML Dasar",
      followers: "400 orang mengikuti",
      modules: "14 Modul",
      duration: "1 Jam 2 Menit",
      category: "Dasar",
    },
    {
      id: 5,
      title: "HTML Dasar",
      followers: "400 orang mengikuti",
      modules: "14 Modul",
      duration: "1 Jam 2 Menit",
      category: "Dasar",
    },
    {
      id: 6,
      title: "HTML Dasar",
      followers: "400 orang mengikuti",
      modules: "14 Modul",
      duration: "1 Jam 2 Menit",
      category: "Dasar",
    },
  ];

  const lanjutanCards = [
    {
      id: 1,
      title: "HTML Lanjutan",
      followers: "200 orang mengikuti",
      modules: "10 Modul",
      duration: "1 Jam 45 Menit",
      category: "Lanjutan",
    },
    {
      id: 2,
      title: "HTML Lanjutan",
      followers: "200 orang mengikuti",
      modules: "10 Modul",
      duration: "1 Jam 45 Menit",
      category: "Lanjutan",
    },
    {
      id: 3,
      title: "HTML Lanjutan",
      followers: "200 orang mengikuti",
      modules: "10 Modul",
      duration: "1 Jam 45 Menit",
      category: "Lanjutan",
    },
    {
      id: 4,
      title: "HTML Lanjutan",
      followers: "200 orang mengikuti",
      modules: "10 Modul",
      duration: "1 Jam 45 Menit",
      category: "Lanjutan",
    },
    {
      id: 5,
      title: "HTML Lanjutan",
      followers: "200 orang mengikuti",
      modules: "10 Modul",
      duration: "1 Jam 45 Menit",
      category: "Lanjutan",
    },
    {
      id: 6,
      title: "HTML Lanjutan",
      followers: "200 orang mengikuti",
      modules: "10 Modul",
      duration: "1 Jam 45 Menit",
      category: "Lanjutan",
    },
  ];

  return (
    <div className="container mx-auto my-14 w-[80%]">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">Materi Dasar</h2>
      </div>
      <div className="relative flex items-center">
        <div
          ref={scrollRefDasar}
          className="flex overflow-hidden space-x-4 pr-8 snap-x snap-mandatory scrollbar-hide"
        >
          {dasarCards.map((card) => (
            <div
              key={card.id}
              className="relative min-w-[300px] h-[400px] bg-gray-100 rounded-3xl snap-center shadow-md p-4 flex flex-col items-start cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <img
                src="/materi.png"
                alt="Thumbnail"
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaUserFriends className="mr-2" />
                <span>{card.followers}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaListAlt className="mr-2" />
                <span>{card.modules}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FaRegClock className="mr-2" />
                <span>{card.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          {dasarCards.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 ${
                index === activeIndexDasar ? "bg-blue-500" : "bg-gray-300"
              } rounded-full`}
            ></span>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => scrollLeft("Dasar")}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scrollRight("Dasar")}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h2 className="text-2xl font-bold">Materi Lanjutan</h2>
      </div>
      <div className="relative flex items-center">
        <div
          ref={scrollRefLanjutan}
          className="flex overflow-hidden space-x-4 pr-8 snap-x snap-mandatory scrollbar-hide"
        >
          {lanjutanCards.map((card) => (
            <div
              key={card.id}
              className="relative min-w-[300px] h-[400px] bg-gray-100 rounded-3xl snap-center shadow-md p-4 flex flex-col items-start"
              onClick={() => handleCardClick(card)}
            >
              <img
                src="/materi.png"
                alt="Thumbnail"
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaUserFriends className="mr-2" />
                <span>{card.followers}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <FaListAlt className="mr-2" />
                <span>{card.modules}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FaRegClock className="mr-2" />
                <span>{card.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          {lanjutanCards.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 ${
                index === activeIndexLanjutan ? "bg-blue-500" : "bg-gray-300"
              } rounded-full`}
            ></span>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => scrollLeft("Lanjutan")}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scrollRight("Lanjutan")}
            className="p-2 rounded-full bg-blue-500 text-white shadow-lg focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMateri;
