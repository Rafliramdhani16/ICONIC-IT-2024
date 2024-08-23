import { useState } from "react";

const useForm = (initialValues, onSubmit) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

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
      const combinedFormData = {
        ...formData,
      };

      const response = await onSubmit(combinedFormData);
      if (response.success !== 200) {
        setMessage(response.message || "An unexpected error occurred.");
        setErrors(response.data || {});
      } else {
        setMessage("Action successful!");
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  return { formData, errors, message, handleChange, handleSubmit };
};

export default useForm;
