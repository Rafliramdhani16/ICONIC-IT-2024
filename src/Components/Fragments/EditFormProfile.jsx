import React, { useState } from "react";
import { TbUpload } from "react-icons/tb";
import useEditProfileForm from "../../Hook/HookEditProfile";
import { useNavigate } from "react-router-dom";
import InputLog from "../Elements/Input/InputLog";
import Modal from "../Elements/Modal/ModalResponse";

const EditProfileForm = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, errors, message } =
    useEditProfileForm(
      {
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        image: "",
        imagePreview: "",
      },
      "/profile"
    );

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("info");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit();

    if (result.success) {
      setModalMessage("Profile updated successfully!");
      setModalType("success");
      setModalVisible(true);
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } else {
      setModalMessage(
        result.message || "Failed to update profile. Please try again."
      );
      setModalType("error");
      setModalVisible(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-between h-full w-full rounded-lg p-6"
      >
        <div className="relative  mx-auto flex flex-col items-center ">
          <img
            src={formData.imagePreview || formData.image}
            className="rounded-3xl aspect-square object-cover w-56 h-56 md:w-96 md:h-96"
            alt="User"
          />
          <label
            htmlFor="imageUpload"
            className="absolute -bottom-0 left-0 right-0 mx-auto"
          >
            <TbUpload className="h-12 p-2 text-neutral-800 cursor-pointer bg-neutral-200 rounded-b-3xl hover:bg-neutral-300 opacity-50 w-full" />
            <input
              id="imageUpload"
              type="file"
              className="hidden"
              onChange={handleChange}
              name="image"
              accept="image/png, image/jpg, image/jpeg"
            />
          </label>
        </div>

        <div className="mt-5">
          <InputLog
            fields={["firstname", "lastname", "username", "email"]}
            handleChange={handleChange}
            errors={errors}
            formData={formData}
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
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCloseAndRedirect={() => navigate("/profile")}
        message={modalMessage}
        type={modalType}
      />
    </>
  );
};

export default EditProfileForm;
