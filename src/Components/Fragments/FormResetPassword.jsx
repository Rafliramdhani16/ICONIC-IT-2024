import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFormResetPassword from "../../Hook/HookResetPw";
import InputLog from "../Elements/Input/InputLog";
import { BiArrowBack } from "react-icons/bi";
import Modal from "../Elements/Modal/ModalResponse";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tokenFromUrl = query.get("token");
  const emailFromUrl = query.get("email");

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: "",
    type: "info",
  });

  useEffect(() => {
    console.log("Token from URL:", tokenFromUrl);
    console.log("Email from URL:", emailFromUrl);
  }, [tokenFromUrl, emailFromUrl]);

  const initialValues = {
    password1: "",
    password2: "",
    token: tokenFromUrl,
    email: emailFromUrl,
  };

  const onSuccess = (response) => {
    setModalContent({ message: response.message, type: "success" });
    setShowModal(true);
  };

  const onError = (message) => {
    setModalContent({ message, type: "error" });
    setShowModal(true);
  };

  const {
    formData,
    errors,
    message,
    isTokenValid,
    isLoading,
    handleChange,
    handleSubmit,
  } = useFormResetPassword(initialValues, onSuccess, onError);

  const handleModalClose = () => {
    setShowModal(false);
    if (modalContent.type === "success") {
      navigate("/masuk");
    } else if (modalContent.type === "error") {
      navigate("/lupasandi");
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Memuat...</div>;
  }

  if (!isTokenValid) {
    return (
      <Modal
        isVisible={true}
        onClose={() => navigate("/lupasandi")}
        message="Token tidak valid atau telah kadaluarsa. Silakan minta token baru."
        type="error"
      />
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6 mx-auto mt-10">
      <button
        onClick={() => navigate("/masuk")}
        type="button"
        className="flex items-center mb-6"
      >
        <BiArrowBack className="text-neutral-800 w-5 h-5" />
        <span className="ml-2">Kembali</span>
      </button>
      <h2 className="text-3xl font-semibold text-neutral-800 mb-6">
        Masukan Sandi Baru
      </h2>
      {message && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={["password1", "password2"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-6 font-semibold hover:bg-blue-700 transition duration-300"
        >
          Ganti Sandi
        </button>
      </form>
      <Modal
        isVisible={showModal}
        onClose={handleModalClose}
        message={modalContent.message}
        type={modalContent.type}
      />
    </div>
  );
};

export default ResetPassword;
