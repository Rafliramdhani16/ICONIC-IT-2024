import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Pembelajaran = () => {
  const data = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: "Pendahuluan HTML",
    icon: <AiFillHtml5 className="text-orange-500 w-8 h-8" />,
    icon2: <IoPlayCircleOutline className="text-orange-500 w-8 h-8" />,
  }));

  return (
    <div className="w-[75%] mx-auto my-10 p-6">
      <h2 className="text-2xl font-semibold mb-4">Pembelajaran</h2>
      <div className="overflow-y-auto h-[450px] custom-scrollbar border rounded-xl shadow-md px-4 py-6">
        {data.map((item) => (
          <Link to={`/pembelajaran/${item.id}`} key={item.id}>
            <div className="flex items-center p-4 bg-white rounded-lg shadow mb-3 hover:shadow-md transition-shadow duration-300 hover:border-2 border-neutral-200">
              <div className="flex-shrink-0 border rounded-lg w-10 h-10 flex items-center justify-center text-lg font-bold text-black mr-4">
                {String(item.id).padStart(2, "0")}
              </div>
              {item.icon}
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
              {item.icon2}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pembelajaran;
