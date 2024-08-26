import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useChangePassword from "../../Hook/HookChagePassword";
import useEditProfileForm from "../../Hook/HookEditProfile";
import Modal from "../Elements/Modal/ModalResponse";
import InputLog from "../Elements/Input/InputLog";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const profile = useEditProfileForm();

  const {
    formData,
    errors,
    isLoading,
    modalContent,
    handleChange,
    handleSubmit,
    setModalContent,
  } = useChangePassword({
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
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          showModal();
        }}
        className="flex flex-col justify-between h-full w-full rounded-lg p-6"
      >
        <div className="w-full flex justify-center ">
          <img
            src={profile.formData.image}
            alt="User"
            className="w-56 h-56 md:w-96 md:h-96 rounded-3xl object-cover"
          />
        </div>
        <div className=" mt-5">
          <InputLog
            fields={["prev_password", "password1", "password2"]}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          <div className="block md:flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600 w-full mb-3"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-4 py-2 bg-white border border-blue-600 text-blue-600  hover:text-white rounded-lg hover:bg-blue-600 w-full mb-3"
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
    </>
  );
};

export default ChangePasswordForm;
