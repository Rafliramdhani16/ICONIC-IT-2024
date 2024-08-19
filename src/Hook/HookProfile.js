import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (initialValues, onSubmit, redirectPath, isEditable = true) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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

    try {
      const response = await onSubmit(formData);
      if (response.success !== 200) {
        setMessage(response.message || "An unexpected error occurred.");
        setErrors(response.data || {});
      } else {
        setMessage("Action successful!");
        if (redirectPath) navigate(redirectPath);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  return {
    formData,
    setFormData,
    errors,
    message,
    handleChange,
    handleSubmit,
    isEditable,
  };
};

export default useForm;
