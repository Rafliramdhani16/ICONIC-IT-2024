import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (initialValues, onSubmit, redirectPath) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const validate = (values) => {
    let errors = {};

    if ("password" in values && values.password !== values.password2) {
      errors.password2 = "Password tidak cocok.";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await onSubmit(formData);
      if (response.success !== 200) {
        setMessage(response.message || "An unexpected error occurred.");
        setErrors(response.data || {});
      } else {
        setMessage("Password berhasil direset!");
        navigate(redirectPath);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  return { formData, errors, message, handleChange, handleSubmit };
};

export default useForm;
