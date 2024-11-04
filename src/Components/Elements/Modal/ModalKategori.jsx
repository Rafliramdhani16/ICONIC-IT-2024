import React, { useState, useEffect } from "react";

const ModalKategori = ({ isOpen, onClose, mode, kategoriData, onSubmit }) => {
  const [formData, setFormData] = useState({ kategori: "", cover: "" });

  useEffect(() => {
    if (mode === "edit" && kategoriData) {
      setFormData({
        kategori: kategoriData.kategori,
        cover: kategoriData.cover,
      });
    } else {
      setFormData({ kategori: "", cover: "" });
    }
  }, [mode, kategoriData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {mode === "create" ? "Tambah Kategori" : "Edit Kategori"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <input
              type="text"
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Cover URL</label>
            <input
              type="text"
              name="cover"
              value={formData.cover}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-lg"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              {mode === "create" ? "Tambah" : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalKategori;
