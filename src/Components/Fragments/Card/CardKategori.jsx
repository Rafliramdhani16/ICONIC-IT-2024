import { useNavigate } from "react-router-dom";
import useMateri from "../../../Hook/HookMateri";
import SkeletonKategori from "../../Elements/Skeleton/SkeCardKategori";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";

const CardKategori = () => {
  const navigate = useNavigate();
  const { materi, loading, error } = useMateri();
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (loading || error) {
    return (
      <div>
        <SkeletonKategori />
      </div>
    );
  }

  return (
    <div className="relative mt-[-100px] z-10 flex justify-center items-center bg-white rounded-3xl shadow-md w-[80%] mx-auto border border-neutral-300 p-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-[96%]">
        {materi.map((item) => (
          <button
            key={item.uuid}
            onClick={() => handleNavigate(`/kategori/${item.uuid}`)}
            onMouseEnter={() => setHoveredButton(item.uuid)}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              border:
                hoveredButton === item.uuid
                  ? "2px solid blue"
                  : "2px solid #d1d5db", // Border biru saat hover
              transition: "all 0.3s ease",
              transform:
                hoveredButton === item.uuid ? "scale(1.05)" : "scale(1)",
              backgroundColor:
                hoveredButton === item.uuid ? "#e5e7eb" : "#f9fafb", // Latar belakang netral
            }}
            className="block md:flex flex-row justify-center items-center w-full h-[65px] rounded-xl"
          >
            <img
              src={item.cover}
              alt={`Materi ${item.kategori}`}
              className="w-6 h-6 md:w-12 md:h-12 m-auto mb-2 md:m-0 md:mr-4"
            />
            <p className="text-center text-sm md:text-base">{item.kategori}</p>
          </button>
        ))}
        <button
          onClick={() => handleNavigate("/AllMateri")}
          onMouseEnter={() => setHoveredButton("allMateri")}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            border:
              hoveredButton === "allMateri"
                ? "2px solid blue"
                : "2px solid #d1d5db", // Border biru saat hover
            transition: "all 0.3s ease",
            transform:
              hoveredButton === "allMateri" ? "scale(1.05)" : "scale(1)",
            backgroundColor:
              hoveredButton === "allMateri" ? "#e5e7eb" : "#f9fafb", // Latar belakang netral
          }}
          className="block md:flex flex-row justify-center items-center w-full h-[65px] rounded-xl"
        >
          <CgMenuGridR className="text-3xl md:text-4xl m-auto md:m-0 md:mr-4 " />
          <p className="text-center md:text-base text-sm">Semua Materi</p>
        </button>
      </div>
    </div>
  );
};

export default CardKategori;
