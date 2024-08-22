import { useNavigate } from "react-router-dom";
import useMateri from "../../../Hook/HookMateri";
import SkeletonKategori from "../../Elements/Skeleton/SkeCardKategori";
import { CgMenuGridR } from "react-icons/cg";
const CardKategori = () => {
  const navigate = useNavigate();
  const { materi, loading, error } = useMateri();

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (loading)
    return (
      <div>
        <SkeletonKategori />
      </div>
    );
  if (error)
    return (
      <div>
        <SkeletonKategori />
      </div>
    );

  return (
    <div className="relative mt-[-100px] z-10 flex justify-center items-center bg-white rounded-3xl shadow-md w-[80%] mx-auto border border-neutral-300 py-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-[96%]">
        {materi.map((item) => (
          <button
            key={item.uuid}
            onClick={() => handleNavigate(`/materi/${item.uuid}`)}
            className="flex flex-row justify-center items-center border-2 border-neutral-300 w-full h-[65px] bg-white rounded-xl hover:bg-gray-200 transition shadow-md"
          >
            <img
              src={item.cover}
              alt={`Materi ${item.kategori}`}
              className="w-12 h-12 mr-4"
            />
            <p className="text-center">{item.kategori}</p>
          </button>
        ))}
        <button
          onClick={() => handleNavigate("/AllMateri")}
          className="flex flex-row justify-center items-center border-2 border-neutral-300 w-full h-[65px] bg-white rounded-xl hover:bg-gray-200 transition shadow-md"
        >
          <CgMenuGridR className="text-4xl mr-4" />
          <p className="text-center">Semua Materi</p>
        </button>
      </div>
    </div>
  );
};

export default CardKategori;
