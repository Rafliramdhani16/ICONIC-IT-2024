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
      console.log(response);
      if (response.success !== 200) {
        setMessage(response.message);
        setErrors(response.data);
      } else {
        setMessage("Berhasil");
      }
    } catch (error) {
      setMessage("Ada yang error, silahkan coba lagi.");
    }
  };

  return { formData, errors, message, handleChange, handleSubmit };
};

export default useForm;
