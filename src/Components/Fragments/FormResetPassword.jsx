import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputLog from "../Elements/Input/InputLog";
import { BiArrowBack } from "react-icons/bi";
import Modal from "../Elements/Modal/ModalResponse";
import useFormResetPassword from "../../Hook/HookResetPw";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tokenFromUrl = query.get("token");
  const emailFromUrl = query.get("email");

  const [isModalVisible, setModalVisible] = useState(false);

  const initialValues = {
    password1: "",
    password2: "",
    token: tokenFromUrl,
    email: emailFromUrl,
  };

  const {
    formData,
    errors,
    isLoading,
    isTokenValid,
    modalContent,
    handleChange,
    handleSubmit,
    setFormData,
  } = useFormResetPassword(initialValues);

  useEffect(() => {
    if (tokenFromUrl !== formData.token || emailFromUrl !== formData.email) {
      setFormData({ ...formData, token: tokenFromUrl, email: emailFromUrl });
    }
  }, [tokenFromUrl, emailFromUrl]);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    if (modalContent.type === "success") {
      navigate("/masuk");
    } else if (modalContent.type === "error" && !isTokenValid) {
      navigate("/lupasandi");
    }
  };

  if (!isTokenValid && !isLoading) {
    return (
      <Modal
        isVisible={true}
        onClose={() => navigate("/lupasandi")}
        onCloseAndRedirect={() => navigate("/lupasandi")}
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
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          showModal();
        }}
      >
        <input type="hidden" name="token" value={formData.token} />
        <input type="hidden" name="email" value={formData.email} />
        <InputLog
          fields={["password1", "password2"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-6 font-semibold hover:bg-blue-700 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Memproses..." : "Ganti Sandi"}
        </button>
      </form>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onCloseAndRedirect={handleCloseModal}
        message={modalContent.message}
        type={modalContent.type}
      />
    </div>
  );
};

export default ResetPassword;
