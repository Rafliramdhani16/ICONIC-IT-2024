import React, { useState } from "react";
import useFormRequestResetPassword from "../../Hook/HookReqPw";
import InputLog from "../Elements/Input/InputLog";
import { useNavigate } from "react-router-dom";
import Modal from "../Elements/Modal/ModalResponse";

const RequestResetPassword = () => {
  const navigate = useNavigate();
  const initialValues = { email: "" };
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("info");
  const [isLoading, setIsLoading] = useState(false);

  const showModal = (message, type) => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const { formData, errors, handleChange, handleSubmit } =
    useFormRequestResetPassword(initialValues, async (response) => {
      setIsLoading(true);
      try {
        if (response.success === 200) {
          showModal(response.message, "success");
        } else {
          showModal(response.message || "Terjadi kesalahan", "error");
        }
      } finally {
        setIsLoading(false);
      }
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSubmit(e);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-3xl font-semibold text-neutral-800 mt-6">
        Reset Password
      </h2>
      <p className="text-sm mb-6 mt-1">
        Link reset password akan dikirimkan ke email anda
      </p>
      <form onSubmit={onSubmit}>
        <InputLog
          fields={["email"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Mengirim..." : "Kirim Email"}
        </button>
      </form>
      <p className="text-center mt-4">atau</p>
      <button
        onClick={() => navigate("/masuk")}
        className="w-full font-semibold text-blue-600 bg-white py-2 border border-blue-600 rounded-full mt-4 hover:bg-blue-600 hover:text-white hover:border-blue-600"
      >
        Kembali ke Login
      </button>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onCloseAndRedirect={handleCloseModal}
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
};

export default RequestResetPassword;
