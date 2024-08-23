import React, { useState, useCallback } from "react";
import InputLog from "../Elements/Input/InputLog";
import { loginUser } from "../../Services/AuthLog";
import useForm from "../../Hook/HookFormLog";
import Modal from "../Elements/Modal/ModalResponse";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const FormLog = () => {
  const navigate = useNavigate();
  const initialValues = { username: "", password: "" };
  const redirectPath = "/";
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("info");

  const showModal = useCallback((message, type) => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  }, []);

  const { formData, errors, message, handleChange, handleSubmit } = useForm(
    initialValues,
    async (data) => {
      showModal("Sedang memproses login...", "info");
      const response = await loginUser(data);
      if (response.success === 200) {
        showModal(
          "Login berhasil! Anda akan dialihkan ke halaman utama.",
          "success"
        );
        setTimeout(() => {
          setModalVisible(false);
          navigate(redirectPath);
        }, 3000);
      } else {
        showModal("Login gagal. Silakan coba lagi.", "error");
      }
      return response;
    },
    redirectPath
  );

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <button onClick={handleBack} type="button" className="flex items-center">
        <BiArrowBack className="text-neutral-800 w-5 h-5" />
        <span className="ml-2">Kembali</span>
      </button>
      <h2 className="text-3xl font-semibold text-neutral-800 my-6">Masuk</h2>
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={["username", "password"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <p className="text-sm my-2 ml-1">
          Lupa kata sandi?
          <Link to="/lupaSandi" className="text-blue-600">
            {" "}
            klik disini
          </Link>
        </p>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 font-semibold"
        >
          Masuk
        </button>
        <p className="text-center mt-4">atau</p>
        <button
          type="button"
          onClick={() => navigate("/daftar")}
          className="w-full font-semibold text-blue-600 bg-white py-2 border border-blue-600 rounded-full mt-4 hover:bg-blue-600 hover:text-white hover:border-blue-600 mb-4"
        >
          Daftar
        </button>
      </form>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        message={modalMessage}
        type={modalType}
      />
    </div>
  );
};

export default FormLog;
