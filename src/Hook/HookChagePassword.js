import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useForm = (
  initialValues,
  onSubmitCallback,
  apiEndpoint,
  redirectPath
) => {
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

    // Example for password confirmation validation
    if (
      formData.newPassword &&
      formData.confirmPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      setErrors({
        confirmPassword: "New Password and Confirm Password do not match.",
      });
      return;
    }

    try {
      const response = await axios.post(apiEndpoint, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        setMessage("Operation successful!");
        if (redirectPath) {
          navigate(redirectPath);
        }
        if (onSubmitCallback) {
          onSubmitCallback();
        }
      }
    } catch (error) {
      setMessage("Operation failed. Please try again.");
    }
  };

  return { formData, handleChange, handleSubmit, errors, message, setFormData };
};

export default useForm;
