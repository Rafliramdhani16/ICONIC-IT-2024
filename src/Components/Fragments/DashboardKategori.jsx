import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const kategoriData = [
  {
    uuid: "e29d3666-6ad3-3928-a3cb-fb7ca5488690",
    cover:
      "https://backend-gyanakaya.bhadrikais.my.id/storage/cover/66d43fd973d69_html.png",
    kategori: "HTML",
  },
  {
    uuid: "8f275dd9-993e-3835-a0e4-14b3fcada323",
    cover:
      "https://backend-gyanakaya.bhadrikais.my.id/storage/cover/66d43fd97e0f2_css.png",
    kategori: "CSS",
  },
  {
    uuid: "8c57f024-3e0e-34de-8cf7-90c95d162931",
    cover:
      "https://backend-gyanakaya.bhadrikais.my.id/storage/cover/66d43fd97ef63_js.png",
    kategori: "Javascript",
  },
];

const DashboardKategori = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-start text-neutral-800">
        Daftar Kategori
      </h1>
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Kategori
              </th>
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Cover
              </th>
              <th className="border-b border-gray-300 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {kategoriData.map((item) => (
              <tr key={item.uuid}>
                <td className="border-b border-r border-gray-300 p-2">
                  {item.kategori}
                </td>
                <td className="border-b border-r border-gray-300 p-2">
                  <img
                    src={item.cover}
                    alt={item.kategori}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border-b border-gray-300 p-2 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-3"
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardKategori;
