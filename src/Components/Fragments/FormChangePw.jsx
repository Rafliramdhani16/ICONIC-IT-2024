import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useChangePassword from "../../Hook/HookChagePassword";
import useEditProfileForm from "../../Hook/HookEditProfile";
import Modal from "../Elements/Modal/ModalResponse";
import InputLog from "../Elements/Input/InputEdit";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const profile = useEditProfileForm();

  const { formData, errors, modalContent, handleChange, handleSubmit } =
    useChangePassword({
      prev_password: "",
      password1: "",
      password2: "",
    });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    if (modalContent.type === "success") {
      navigate("/profile");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          showModal();
        }}
        className="flex flex-col lg:flex-row justify-between w-full max-w-4xl mx-auto my-auto p-4 rounded-lg"
      >
        <div className="flex justify-center mb-5 lg:mb-0 mr-5">
          <img
            src={profile.formData.image}
            alt="User"
            className="md:w-56 md:h-56 xl:w-80 xl:h-80 rounded-3xl object-cover"
          />
        </div>
        <div className="flex-grow">
          <InputLog
            fields={["prev_password", "password1", "password2"]}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <div className="flex flex-col md:flex-row justify-end gap-3 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full mb-3"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-4 py-2 bg-white border border-blue-600 text-blue-600 hover:text-white rounded-lg hover:bg-blue-600 w-full mb-3"
            >
              Batal
            </button>
          </div>
        </div>
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

export default ChangePasswordForm;
