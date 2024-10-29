import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { MateriModal } from "../Elements/Modal/ModalAddMateri";
import {
  fetchMateriList,
  createMateri,
  updateMateri,
  removeMateri,
} from "../../Redux/Features/materiSlice";

const DashboardMateri = () => {
  const dispatch = useDispatch();
  const { materiList, isLoading, error } = useSelector((state) => state.materi);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    cover: null,
    materi: "",
    deskripsi: "",
    lanjutan: false,
    id_kategori: "",
    waktu: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchMateriList());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.materi) newErrors.materi = "Materi is required";
    if (!form.deskripsi) newErrors.deskripsi = "Deskripsi is required";
    if (!form.waktu) newErrors.waktu = "Waktu is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        formData.append(key, form[key]);
      }
    });

    try {
      if (isEditing) {
        await dispatch(
          updateMateri({ id: form.uuid, userData: formData })
        ).unwrap();
      } else {
        await dispatch(createMateri(formData)).unwrap();
      }
      setIsModalOpen(false);
      setForm({
        cover: null,
        materi: "",
        deskripsi: "",
        lanjutan: false,
        id_kategori: "",
        waktu: "",
      });
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this materi?")) {
      try {
        await dispatch(removeMateri(id)).unwrap();
      } catch (error) {
        console.error("Failed to delete materi:", error);
      }
    }
  };

  const openAddModal = () => {
    setForm({
      cover: null,
      materi: "",
      deskripsi: "",
      lanjutan: false,
      id_kategori: "",
      waktu: "",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const openEditModal = (materi) => {
    setForm({
      ...materi,
      cover: null,
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <div className="text-center text-2xl font-semibold">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-2xl font-semibold text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Daftar Materi</h2>
        <button
          onClick={openAddModal}
          className="flex items-center py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          <FaPlus className="w-5 h-5 mr-2" />
          Tambah Materi
        </button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Materi
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Deskripsi
              </th>
              <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Lanjutan
              </th>
              <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Jumlah Siswa
              </th>
              <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Jumlah Modul
              </th>
              <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-r border-gray-300">
                Waktu (menit)
              </th>
              <th className="py-4 px-6 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider border-b border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {materiList.map((materi) => (
              <tr key={materi.uuid} className="hover:bg-gray-50">
                <td className="py-4 px-6 border-r border-gray-300">
                  <div className="flex items-center">
                    <img
                      src={materi.cover}
                      alt={materi.materi}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <span className="font-medium text-gray-900">
                      {materi.materi}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 border-r border-gray-300">
                  {materi.deskripsi.substring(0, 100)}...
                </td>
                <td className="py-4 px-6 text-center border-r border-gray-300">
                  {materi.lanjutan ? (
                    <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs font-semibold">
                      Lanjutan
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs font-semibold">
                      Dasar
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 text-center text-sm text-gray-500 border-r border-gray-300">
                  {materi.jumlah_siswa}
                </td>
                <td className="py-4 px-6 text-center text-sm text-gray-500 border-r border-gray-300">
                  {materi.jumlah_modul}
                </td>
                <td className="py-4 px-6 text-center text-sm text-gray-500 border-r border-gray-300">
                  {materi.waktu}
                </td>
                <td className="py-4 px-6 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => openEditModal(materi)}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(materi.uuid)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MateriModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        form={form}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        errors={errors}
        isEditing={isEditing}
      />
    </div>
  );
};

export default DashboardMateri;
