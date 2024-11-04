import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchKategoriList,
  createKategoriAsync,
  updateKategoriAsync,
  deleteKategoriAsync,
} from "../../Redux/Features/kategoriSlice";
import ModalKategori from "../Elements/Modal/ModalKategori";
import ModalDelete from "../Elements/Modal/ModalDelete";

const DashboardKategori = () => {
  const dispatch = useDispatch();
  const {
    kategoriList,
    isFetching,
    isCreating,
    isUpdating,
    isDeleting,
    error,
  } = useSelector((state) => state.kategori);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedKategori, setSelectedKategori] = useState(null);

  useEffect(() => {
    dispatch(fetchKategoriList());
  }, [dispatch]);

  const handleCreate = (formData) => {
    dispatch(createKategoriAsync(formData)).then(() => {
      setIsCreateModalOpen(false);
    });
  };

  const handleEdit = (formData) => {
    dispatch(
      updateKategoriAsync({
        kategoriId: selectedKategori.uuid,
        kategoriData: formData,
      })
    ).then(() => {
      setIsEditModalOpen(false);
      setSelectedKategori(null);
    });
  };

  const handleDelete = () => {
    dispatch(deleteKategoriAsync(selectedKategori.uuid)).then(() => {
      setIsDeleteModalOpen(false);
      setSelectedKategori(null);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-neutral-800">Daftar Kategori</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <FaPlus /> Tambah Kategori
        </button>
      </div>

      {isFetching && <p className="text-center p-4">Loading kategori...</p>}
      {error && <p className="text-center text-red-500 p-4">{error}</p>}

      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Gambar
              </th>
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Kategori
              </th>
              <th className="border-b border-gray-300 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {kategoriList.map((item) => (
              <tr key={item.uuid}>
                <td className="border-b border-r border-gray-300 p-2">
                  <img
                    src={item.cover}
                    alt={item.kategori}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border-b border-r border-gray-300 p-2">
                  {item.kategori}
                </td>
                <td className="border-b border-gray-300 p-2 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-3"
                    title="Edit"
                    onClick={() => {
                      setSelectedKategori(item);
                      setIsEditModalOpen(true);
                    }}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                    onClick={() => {
                      setSelectedKategori(item);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalKategori
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        mode="create"
        onSubmit={handleCreate}
      />

      <ModalKategori
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedKategori(null);
        }}
        mode="edit"
        kategoriData={selectedKategori}
        onSubmit={handleEdit}
      />

      <ModalDelete
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedKategori(null);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default DashboardKategori;
