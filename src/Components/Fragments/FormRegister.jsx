import React, { useState, useCallback } from "react";
import InputLog from "../Elements/Input/InputLog";
import { registerUser } from "../../Services/AuthLog";
import useForm from "../../Hook/HookFormLog";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Modal from "../Elements/Modal/ModalResponse";

const FormRegister = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  const redirectPath = "/masuk";
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("info");
  const [isLoading, setIsLoading] = useState(false);

  const showModal = useCallback((message, type) => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  }, []);

  const handleCloseAndRedirect = useCallback(() => {
    setModalVisible(false);
    navigate(redirectPath);
  }, [navigate]);

  const { formData, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    async (data) => {
      setIsLoading(true);
      showModal("Sedang memproses pendaftaran...", "info");
      const response = await registerUser(data);
      setIsLoading(false);
      if (response.success === 200) {
        showModal("Pendaftaran berhasil, Silahkan Login", "success");
      } else {
        showModal("Pendaftaran gagal. Silakan coba lagi.", "error");
      }
      return response;
    },
    redirectPath
  );

  const handleBack = () => {
    navigate("/masuk");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <button
        onClick={handleBack}
        type="button"
        className="flex items-center transition-transform duration-300 transform hover:scale-105"
      >
        <BiArrowBack className="text-neutral-800 w-5 h-5" />
        <span className="ml-2">Kembali</span>
      </button>
      <h2 className="text-3xl font-semibold text-neutral-800 my-6">Daftar</h2>
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={[
            "firstname",
            "lastname",
            "username",
            "email",
            "password",
            "password2",
          ]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className={`w-full py-2 rounded-full mt-4 font-semibold bg-blue-600 text-white flex items-center justify-center transition-transform duration-300 transform hover:scale-105 ${
            isLoading ? "opacity-75" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Memproses...
            </>
          ) : (
            "Daftar"
          )}
        </button>
      </form>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onCloseAndRedirect={
          modalType === "success"
            ? handleCloseAndRedirect
            : () => setModalVisible(false)
        }
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
};

export default FormRegister;
