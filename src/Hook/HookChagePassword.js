import { useState } from "react";
import { changePassword } from "../Services/AuthLog";
import { useNavigate } from "react-router-dom";

const useChangePassword = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: "",
    type: "info",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.prev_password)
      newErrors.prev_password = "Password lama harus diisi";
    if (!formData.password1) newErrors.password1 = "Password baru harus diisi";
    if (!formData.password2)
      newErrors.password2 = "Konfirmasi password harus diisi";
    if (formData.password1 !== formData.password2)
      newErrors.password2 = "Password tidak cocok";
    if (formData.password1.length < 8)
      newErrors.password1 = "Password harus minimal 8 karakter";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await changePassword(formData);
      if (response.success === 200) {
        setModalContent({ message: response.message, type: "success" });
        setTimeout(() => navigate("/profile"), 3000);
      } else {
        setModalContent({
          message: response.message || "Gagal mengganti kata sandi",
          type: "error",
        });
      }
    } catch (error) {
      setModalContent({
        message: "Terjadi kesalahan saat mengganti kata sandi",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    modalContent,
    handleChange,
    handleSubmit,
    setModalContent,
  };
};

export default useChangePassword;
