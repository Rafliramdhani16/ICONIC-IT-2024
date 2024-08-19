import React from "react";
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
      className="p-6 bg-white rounded-lg shadow-md mt-24 h-[75dvh] w-[80%] border border-neutral-300 mx-auto"
    >
      <div className="flex flex-col items-center mb-6">
        <img
          src={formData.image || "./materi.png"}
          alt="User"
          className="w-52 h-52 rounded-full border border-neutral-500 mx-auto"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="mt-2"
        />
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
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="px-4 py-2 ml-4 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
