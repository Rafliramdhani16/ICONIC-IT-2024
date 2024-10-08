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
          setFormData((prevData) => ({
            ...prevData,
            username: response.data.username,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            email: response.data.email,
            image: response.data.image,
            imagePreview: response.data.image,
          }));
        }
      } catch (error) {
        console.error("Error Mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    setErrors({});
    setMessage("");

    try {
      const response = await updateUserData(formData);
      if (response.success !== 200) {
        setMessage(response.message);
        setErrors(response.data || {});
        return { success: false, message: response.message };
      } else {
        setMessage("Berhasil Mengubah Profil");
        return { success: true, message: "Berhasil Mengubah Profil" };
      }
    } catch (error) {
      setMessage("Sepertinya ada yang error, silahkan coba lagi.");
      return { success: false, message: "Sepertinya ada yang error" };
    }
  };

  return { formData, errors, message, handleChange, handleSubmit };
};

export default useEditProfileForm;
