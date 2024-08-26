import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useModulByMateri from "../../Hook/HookModul";
import { useParams } from "react-router-dom";

const Pembelajaran = () => {
  const { materiId } = useParams();
  const { data, loading, error } = useModulByMateri(materiId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.modul) return <div>Tidak ada data tersedia</div>;

  return (
    <div className="w-[75%] mx-auto my-10 p-6">
      <h2 className="text-2xl font-semibold mb-4">Pembelajaran</h2>
      <div className="overflow-y-auto h-[450px] custom-scrollbar border rounded-xl shadow-md px-4 py-6">
        {data.modul.map((item, index) => (
          <Link to={`/pembelajaran/${item.uuid}`} key={item.uuid}>
            <div className="flex items-center p-4 bg-white rounded-lg shadow mb-3 hover:shadow-md transition-shadow duration-300 hover:border-2 border-neutral-200">
              <div className="flex-shrink-0 border rounded-lg w-10 h-10 flex items-center justify-center text-lg font-bold text-black mr-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <img
                src={item.cover}
                alt={item.modul}
                className="w-8 h-8 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-medium">{item.modul}</h3>
              </div>
              <IoPlayCircleOutline className="text-blue-500 w-8 h-8 hover:text-blue-600" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pembelajaran;
