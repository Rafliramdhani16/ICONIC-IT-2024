import React from "react";
import { TbUpload } from "react-icons/tb"; // Menggunakan TbUpload dari react-icons
import useEditProfileForm from "../../Hook/HookEditProfile";
import { useNavigate } from "react-router-dom";

const EditProfileForm = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, message } = useEditProfileForm(
    {
      username: "",
      fullname: "",
      email: "",
      image: "",
    },
    "/profile"
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md mt-24 h-[77dvh] w-[80%] border border-neutral-300 mx-auto"
    >
      <div className="relative my-4 overflow-hidden mx-auto">
        <img
          src={formData.image || "./materi.png"}
          className=" rounded-3xl justify-center items-center m-auto aspect-square object-cover border border-neutral-500 w-52 h-52"
          alt="User"
        />
        <label
          htmlFor="imageUpload"
          className="absolute bottom-0 left-0 right-0 w-52 mx-auto"
        >
          <TbUpload className="h-12 p-2 text-neutral-800 cursor-pointer bg-neutral-200 rounded-b-3xl hover:bg-neutral-300 opacity-70 w-full" />
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
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 pl-3 border rounded-lg bg-neutral-100"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">
          Full Name:
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full p-2 pl-3 border rounded-lg bg-neutral-100"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 pl-3 border rounded-lg bg-neutral-100"
        />
      </div>
      {message && <div className="text-red-500 text-sm">{message}</div>}
      <div className="flex justify-end mr-20">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="px-4 py-2 ml-4 bg-white border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-700 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
