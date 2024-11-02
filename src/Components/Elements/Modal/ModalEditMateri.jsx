import React from "react";
import PropTypes from "prop-types";

const ModalEditMateri = ({
  isOpen = false,
  onClose = () => {},
  form = {},
  onInputChange = () => {},
  onSubmit = () => {},
  errors = {},
}) => {
  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Tambahkan uuid ke formData
    formData.append("uuid", form.uuid);

    Object.keys(form).forEach((key) => {
      if (key === "cover" && form[key] instanceof File) {
        formData.append(key, form[key]);
      } else if (key === "lanjutan") {
        formData.append(key, form[key]);
      } else if (
        form[key] !== null &&
        form[key] !== undefined &&
        key !== "uuid"
      ) {
        formData.append(key, form[key]);
      }
    });

    // debug
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative p-8 bg-white w-full max-w-md m-auto rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Materi</h2>
        <form onSubmit={handleFormSubmit}>
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
              accept="image/*"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {form.cover && typeof form.cover === "string" && (
              <img
                src={form.cover}
                alt="Current cover"
                className="mt-2 w-20 h-20 object-cover"
              />
            )}
            {errors.cover && (
              <p className="text-red-500 text-xs italic">{errors.cover}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="materi"
            >
              Materi *
            </label>
            <input
              type="text"
              id="materi"
              name="materi"
              value={form.materi || ""}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
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
              Deskripsi *
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={form.deskripsi || ""}
              onChange={onInputChange}
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {errors.deskripsi && (
              <p className="text-red-500 text-xs italic">{errors.deskripsi}</p>
            )}
          </div>

          <div className="mb-4">
            <fieldset>
              <legend className="text-gray-700 text-sm font-bold mb-2">
                Jenis Materi: *
              </legend>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="lanjutan"
                  value="dasar"
                  checked={form.lanjutan === "0"}
                  onChange={() =>
                    onInputChange({
                      target: {
                        name: "lanjutan",
                        value: "0",
                      },
                    })
                  }
                  className="mr-2"
                  required
                />
                Dasar
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lanjutan"
                  value="lanjutan"
                  checked={form.lanjutan === "1"}
                  onChange={() =>
                    onInputChange({
                      target: {
                        name: "lanjutan",
                        value: "1",
                      },
                    })
                  }
                  className="mr-2"
                />
                Lanjutan
              </label>
            </fieldset>
            {errors.lanjutan && (
              <p className="text-red-500 text-xs italic">{errors.lanjutan}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id_kategori"
            >
              Kategori *
            </label>
            <select
              id="id_kategori"
              name="id_kategori"
              value={form.id_kategori || ""}
              onChange={onInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
              <option value="4">PHP</option>
            </select>
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
              Waktu (menit) *
            </label>
            <input
              type="number"
              id="waktu"
              name="waktu"
              value={form.waktu || ""}
              onChange={onInputChange}
              min="1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
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
              Simpan Perubahan
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

ModalEditMateri.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  form: PropTypes.shape({
    uuid: PropTypes.string,
    cover: PropTypes.any,
    materi: PropTypes.string,
    deskripsi: PropTypes.string,
    lanjutan: PropTypes.string,
    id_kategori: PropTypes.string,
    waktu: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onInputChange: PropTypes.func,
  onSubmit: PropTypes.func,
  errors: PropTypes.object,
};

export default ModalEditMateri;
