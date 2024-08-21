import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData, updateUserData } from "../Services/AuthLog";

const useEditProfileForm = (initialValues, redirectPath) => {
  const [formData, setFormData] = useState({
    ...initialValues,
    imagePreview: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData();
        if (response.success === 200) {
          setFormData({
            ...formData,
            username: response.data.username,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            email: response.data.email,
            image: response.data.image,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    try {
      const response = await updateUserData(formData);
      if (response.success !== 200) {
        setMessage(response.message || "An unexpected error occurred.");
        setErrors(response.data || {});
      } else {
        setMessage("Profile updated successfully!");
        navigate(redirectPath);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  return { formData, errors, message, handleChange, handleSubmit };
};

export default useEditProfileForm;
