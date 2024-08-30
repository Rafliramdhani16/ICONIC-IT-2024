import React from "react";
import { format } from "date-fns";
import { useSertifikat } from "../../Hook/HookGetSerti";

const SertifikatCard = () => {
  const { sertifikat, loading, error } = useSertifikat();

  if (loading) return <p className="text-center text-gray-600">aduhh</p>;
  if (error)
    return <p className="text-center text-red-600">Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        serti maneh ya hehehehehehe
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sertifikat.map((item) => (
          <div
            key={item.uuid}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.materi[0].cover}
              alt={item.materi[0].materi}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {item.materi[0].materi}
              </h3>
              <p className="text-gray-600 mb-4">
                Created: {format(new Date(item.created_at), "dd MMMM yyyy")}
              </p>
              <a
                href={item.sertifikat}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                ambil
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SertifikatCard;
