import { useState } from "react";
import { addMateri, editMateri } from "../Services/Dashboard";

export const useAddMateri = (onSuccess) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    cover: null,
    materi: "",
    deskripsi: "",
    lanjutan: false,
    id_kategori: "",
    waktu: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (formData, isEditing) => {
    try {
      const result = isEditing
        ? await editMateri(form.uuid, formData)
        : await addMateri(formData);
      if (result.success) {
        setIsModalOpen(false);
        onSuccess();
      } else {
        setErrors(result.errors || {});
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ general: "An error occurred while submitting the form." });
    }
  };

  return {
    isModalOpen,
    setIsModalOpen,
    form,
    setForm,
    handleInputChange,
    handleSubmit,
    errors,
  };
};
