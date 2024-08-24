import { useState, useEffect } from "react";
import { resetPassword, cekToken } from "../Services/AuthLog";

const useFormResetPassword = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: "",
    type: "info",
  });

  useEffect(() => {
    const validateToken = async () => {
      if (!formData.token || !formData.email) {
        setModalContent({
          message: "Token atau email tidak tersedia",
          type: "error",
        });
        setIsTokenValid(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await cekToken({
          token: formData.token,
          email: formData.email,
        });

        if (response.success === 200) {
          setIsTokenValid(true);
        } else {
          setIsTokenValid(false);
          setModalContent({
            message:
              response.message || "Token tidak valid atau telah kadaluarsa",
            type: "error",
          });
        }
      } catch (error) {
        console.error("Token validation error:", error);
        setIsTokenValid(false);
        setModalContent({
          message: "Terjadi kesalahan saat memvalidasi token",
          type: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, [formData.token, formData.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.password1) newErrors.password1 = "Password baru harus diisi";
    if (!formData.password2)
      newErrors.password2 = "Konfirmasi password harus diisi";
    if (formData.password1 !== formData.password2)
      newErrors.password2 = "Password tidak cocok";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await resetPassword(formData);
      if (response.success) {
        setModalContent({ message: response.message, type: "success" });
      } else {
        setModalContent({
          message: response.message || "Gagal mengatur ulang kata sandi",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Reset password error:", error);
      setModalContent({
        message: "Terjadi kesalahan saat mengatur ulang kata sandi",
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
    isTokenValid,
    modalContent,
    handleChange,
    handleSubmit,
    setFormData,
  };
};

export default useFormResetPassword;
