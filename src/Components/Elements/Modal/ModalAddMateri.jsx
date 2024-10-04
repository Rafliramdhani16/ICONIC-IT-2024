import React from "react";

export const MateriModal = ({
  isOpen,
  onClose,
  form,
  onInputChange,
  onSubmit,
  errors,
  isEditing,
}) => {
  if (!isOpen) return null;

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    onInputChange({ target: { name, value: value === "lanjutan" } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (key === "cover" && form[key] instanceof File) {
        formData.append(key, form[key]);
      } else if (key === "lanjutan") {
        formData.append(key, form[key] ? "true" : "false");
      } else {
        formData.append(key, form[key]);
      }
    });
    console.log("Form data before submission:", Object.fromEntries(formData));
    onSubmit(formData, isEditing);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 bg-white w-full max-w-md m-auto rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit Materi" : "Tambah Materi Baru"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cover"
            >
              Cover
            </label>
            <input
              type="file"
              id="cover"
              name="cover"
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.cover && (
              <p className="text-red-500 text-xs italic">{errors.cover}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="materi"
            >
              Materi
            </label>
            <input
              type="text"
              id="materi"
              name="materi"
              value={form.materi}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.materi && (
              <p className="text-red-500 text-xs italic">{errors.materi}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={form.deskripsi}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.deskripsi && (
              <p className="text-red-500 text-xs italic">{errors.deskripsi}</p>
            )}
          </div>
          <div className="mb-4">
            <fieldset>
              <legend className="text-gray-700 text-sm font-bold mb-2">
                Jenis Materi:
              </legend>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="lanjutan"
                  value="dasar"
                  checked={!form.lanjutan}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Dasar
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lanjutan"
                  value="lanjutan"
                  checked={form.lanjutan}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Lanjutan
              </label>
            </fieldset>
            {errors.lanjutan && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.lanjutan}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id_kategori"
            >
              Kategori
            </label>
            <input
              type="text"
              id="id_kategori"
              name="id_kategori"
              value={form.id_kategori}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.id_kategori && (
              <p className="text-red-500 text-xs italic">
                {errors.id_kategori}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="waktu"
            >
              Waktu (menit)
            </label>
            <input
              type="number"
              id="waktu"
              name="waktu"
              value={form.waktu}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.waktu && (
              <p className="text-red-500 text-xs italic">{errors.waktu}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? "Simpan Perubahan" : "Tambah Materi"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
