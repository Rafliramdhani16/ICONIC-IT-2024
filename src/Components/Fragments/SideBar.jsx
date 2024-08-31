import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import useModulByMateri from "../../Hook/HookModul";
import { Link } from "react-router-dom";

const Sidebar = ({ open, toggleSidebar, materiId, modulId }) => {
  const { data, error, joined, handleUnlock } = useModulByMateri(materiId);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  const totalModul = data.modul.length;
  const unlockedModul = data.modul.filter((modul) => modul.unlock).length;
  const percentage = (unlockedModul / totalModul) * 100;

  return (
    <div
      className={`fixed top-[80px] right-0 h-[calc(100%-100px)] bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out rounded-l-3xl ${
        open
          ? "translate-x-0 lg:w-[390px]"
          : "translate-x-[calc(100%-3rem)] lg:w-12"
      }`}
    >
      <div className="flex flex-col p-4 bg-white rounded-tl-3xl">
        <div className="flex items-center text-black mb-4">
          <button onClick={toggleSidebar} className="mr-4">
            {open ? (
              <AiFillRightCircle className="h-7 w-7 text-blue-500 hover:text-blue-600" />
            ) : (
              <AiFillLeftCircle className="h-7 w-7 text-blue-500 hover:text-blue-600" />
            )}
          </button>
          {open && <h2 className="text-xl font-semibold">{data.materi}</h2>}
        </div>

        {open && (
          <>
            <div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-gray-600 text-xs mt-1">
                {percentage}% Selesai
              </p>
            </div>
          </>
        )}
      </div>

      {open && (
        <ul className="p-4">
          {data.modul.map((modul, index) => (
            <li key={modul.uuid} className="relative flex items-center py-2">
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 ${
                    modulId === modul.uuid
                      ? "bg-green-500"
                      : modul.unlock
                      ? "bg-white border-[3px] border-blue-500"
                      : "bg-gray-300"
                  } rounded-full z-10`}
                ></div>
                {index < data.modul.length - 1 && (
                  <div
                    className={`h-full w-[2px] ${
                      modul.unlock ? "bg-blue-500" : "bg-gray-300"
                    } absolute top-3 left-[5px]`}
                  ></div>
                )}
              </div>
              {modul.unlock ? (
                <Link
                  to={`/materi/${data.uuid}/${modul.uuid}`}
                  className={`ml-6 px-4 py-2 ${
                    modulId === modul.uuid ? "bg-green-500" : "bg-blue-500"
                  } text-white rounded-md w-full cursor-pointer`}
                >
                  {modul.modul}
                </Link>
              ) : (
                <div className="ml-6 px-4 py-2 text-gray-500 hover:bg-blue-100 rounded-md w-full cursor-not-allowed">
                  {modul.modul}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      {!joined && (
        <button
          onClick={handleUnlock}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full"
        >
          Unlock Materi
        </button>
      )}
    </div>
  );
};

export default Sidebar;
