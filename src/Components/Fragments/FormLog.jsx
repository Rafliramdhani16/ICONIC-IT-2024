import React, { useState, useCallback, useEffect } from "react";
import InputLog from "../Elements/Input/InputLog";
import Modal from "../Elements/Modal/ModalResponse";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useAuth } from "../../Context/AuthLogContext";

const FormLog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, error: authError, clearError } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("info");

  const showModal = useCallback((message, type) => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  }, []);

  const handleCloseAndRedirect = useCallback(() => {
    setModalVisible(false);
    const searchParams = new URLSearchParams(location.search);
    const redirectTo = searchParams.get("redirect") || "/";
    navigate(redirectTo);
  }, [navigate, location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setErrors({});
    showModal("Sedang memproses login...", "info");

    try {
      const response = await login(formData);
      if (response.success) {
        showModal(
          "Login berhasil! Anda akan dialihkan ke halaman yang dituju.",
          "success"
        );
      } else {
        showModal(authError || "Login gagal. Silakan coba lagi.", "error");
        setErrors(response.errors || {});
      }
    } catch (error) {
      showModal("Terjadi kesalahan saat login", "error");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => clearError();
  }, [clearError]);

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
          errors={{ ...errors, ...(authError ? { general: authError } : {}) }}
        />
        {authError && <p className="text-red-500 text-sm mt-2">{authError}</p>}
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

export default FormLog;
