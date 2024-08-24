import { useState, useEffect } from "react";
import { resetPassword, cekToken } from "../Services/AuthLog";

const useFormResetPassword = (initialValues, onSuccess, onError) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      if (!initialValues.token || !initialValues.email) {
        setIsTokenValid(false);
        onError("Token atau email tidak tersedia");
        return;
      }

      try {
        const response = await cekToken({
          token: initialValues.token,
          email: initialValues.email,
        });

        if (response.success) {
          setIsTokenValid(true);
        } else {
          setIsTokenValid(false);
          onError(
            response.message || "Token tidak valid atau telah kadaluarsa"
          );
        }
      } catch (error) {
        console.error("Token validation error:", error);
        setIsTokenValid(false);
        onError("Terjadi kesalahan saat memvalidasi token");
      }
    };

    validateToken();
  }, [initialValues.token, initialValues.email, onError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    if (formData.password1 !== formData.password2) {
      setErrors({ password2: "Password tidak cocok" });
      return;
    }

    if (!isTokenValid) {
      setMessage("Token tidak valid atau telah kadaluarsa");
      onError("Token tidak valid atau telah kadaluarsa");
      return;
    }

    try {
      const response = await resetPassword(formData);
      if (response.success) {
        setMessage(response.message);
        onSuccess(response);
      } else {
        setErrors(response.data);
        setMessage(response.message);
        onError(response.message);
      }
    } catch (error) {
      console.error("Reset password error:", error);
      setMessage("Terjadi kesalahan saat mengatur ulang kata sandi");
      onError("Terjadi kesalahan saat mengatur ulang kata sandi");
    }
  };

  return {
    formData,
    errors,
    message,
    isTokenValid,
    handleChange,
    handleSubmit,
  };
};

export default useFormResetPassword;
