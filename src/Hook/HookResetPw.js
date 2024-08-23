import { useState } from "react";
import { resetPassword } from "../Services/AuthLog";

const useFormResetPassword = (initialValues, onSuccess) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    const response = await resetPassword(formData);

    if (response.success === 200) {
      setMessage(response.message);
      onSuccess(response);
    } else if (response.success === 422) {
      setErrors(response.data);
      setMessage(response.message);
    } else {
      setMessage("Something went wrong, please try again.");
    }
  };

  return { formData, errors, message, handleChange, handleSubmit };
};

export default useFormResetPassword;
