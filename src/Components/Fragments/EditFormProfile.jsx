import React, { useState } from "react";
import { TbUpload } from "react-icons/tb";
import useEditProfileForm from "../../Hook/HookEditProfile";
import { useNavigate } from "react-router-dom";
import InputLog from "../Elements/Input/InputEdit";
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
    <div className="flex items-center justify-center w-full h-full">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col lg:flex-row justify-between w-full max-w-4xl mx-auto my-auto p-4"
      >
        <div className="relative flex flex-col items-center mb-6 md:mb-0 md:mr-6 xl:mt-4 ">
          <div className="xl:w-80 xl:h-80 md:w-64 md:h-64 relative ">
            <img
              src={formData.imagePreview || formData.image}
              className="rounded-3xl aspect-square object-cover w-full h-full"
              alt="User"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 left-0 right-0 flex justify-center"
            >
              <div className="h-10 p-2 text-neutral-800 cursor-pointer bg-neutral-200 rounded-b-3xl hover:bg-neutral-300 opacity-70 w-full flex items-center justify-center">
                <TbUpload className="w-6 h-6" />
              </div>
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
        </div>

        <div className="flex-grow">
          <div className="flex flex-col gap-3 w-full">
            <InputLog
              fields={["firstname", "lastname", "username", "email"]}
              handleChange={handleChange}
              errors={errors}
              formData={formData}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-3 mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full md:w-72 mb-3 md:mb-0 transition duration-300"
            >
              Simpan Perubahan
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="px-4 py-2 bg-white border border-blue-600 text-blue-600 hover:text-white rounded-lg hover:bg-blue-600 w-full md:w-72 transition duration-300"
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
    </div>
  );
};

export default EditProfileForm;
