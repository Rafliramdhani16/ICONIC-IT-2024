import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ModalAddMateri from "../Elements/Modal/ModalAddMateri";
import ModalEditMateri from "../Elements/Modal/ModalEditMateri";
import {
  fetchMateriList,
  createMateri,
  updateMateri,
  removeMateri,
} from "../../Redux/Features/materiSlice";

const DashboardMateri = () => {
  const dispatch = useDispatch();
  const { materiList, loading, error } = useSelector((state) => state.materi);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form, setForm] = useState({
    cover: null,
    materi: "",
    deskripsi: "",
    lanjutan: "0",
    id_kategori: "",
    waktu: "",
    uuid: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(fetchMateriList());
  }, [dispatch]);

  const validateForm = () => {
    const newErrors = {};
    if (!form.materi) newErrors.materi = "Judul materi wajib diisi";
    if (!form.deskripsi) newErrors.deskripsi = "Deskripsi wajib diisi";
    if (!form.id_kategori) newErrors.id_kategori = "Kategori wajib dipilih";
    if (!form.waktu) newErrors.waktu = "Waktu wajib diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? (files ? files[0] : null) : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleEdit = (materi) => {
    setForm({
      uuid: materi.uuid || "",
      materi: materi.materi || "",
      deskripsi: materi.deskripsi || "",
      lanjutan: materi.lanjutan === 1 ? "1" : "0",
      id_kategori: materi.id_kategori || "",
      waktu: materi.waktu || "",
      cover: materi.cover || null,
    });
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus materi ini?")) {
      try {
        await dispatch(removeMateri(id)).unwrap();
        dispatch(fetchMateriList());
      } catch (error) {
        console.error("Error deleting materi:", error);
      }
    }
  };

  const handleAddSubmit = async (formData) => {
    if (!validateForm()) return;

    try {
      await dispatch(createMateri(formData)).unwrap();
      resetForm();
      setIsAddModalOpen(false);
      dispatch(fetchMateriList());
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: error.message });
    }
  };

  const handleEditSubmit = async (formData) => {
    if (!validateForm()) return;

    try {
      await dispatch(
        updateMateri({
          id: form.uuid,
          userData: formData,
        })
      ).unwrap();
      resetForm();
      setIsEditModalOpen(false);
      dispatch(fetchMateriList());
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: error.message });
    }
  };

  const resetForm = () => {
    setForm({
      cover: null,
      materi: "",
      deskripsi: "",
      lanjutan: "0",
      id_kategori: "",
      waktu: "",
      uuid: "",
    });
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Materi</h1>
        <button
          onClick={() => {
            resetForm();
            setIsAddModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <FaPlus /> Tambah Materi
        </button>
      </div>

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : error ? (
        <div className="text-red-500 text-center py-4">Error: {error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b">No</th>
                <th className="px-6 py-3 border-b">Cover</th>
                <th className="px-6 py-3 border-b">Materi</th>
                <th className="px-6 py-3 border-b">Deskripsi</th>
                <th className="px-6 py-3 border-b">Kategori</th>
                <th className="px-6 py-3 border-b">Waktu</th>
                <th className="px-6 py-3 border-b">Jenis</th>
                <th className="px-6 py-3 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {materiList.map((materi, index) => (
                <tr key={materi.uuid} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <img
                      src={materi.cover}
                      alt={materi.materi}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 border-b">{materi.materi}</td>
                  <td className="px-6 py-4 border-b">{materi.deskripsi}</td>
                  <td className="px-6 py-4 border-b">{materi.kategori}</td>
                  <td className="px-6 py-4 border-b">{materi.waktu} menit</td>
                  <td className="px-6 py-4 border-b">
                    {materi.lanjutan === 1 ? "Lanjutan" : "Dasar"}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(materi)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(materi.uuid)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ModalAddMateri
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          resetForm();
        }}
        form={form}
        onInputChange={handleInputChange}
        onSubmit={handleAddSubmit}
        errors={errors}
      />

      <ModalEditMateri
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          resetForm();
        }}
        form={form}
        onInputChange={handleInputChange}
        onSubmit={handleEditSubmit}
        errors={errors}
      />
    </div>
  );
};

export default DashboardMateri;
