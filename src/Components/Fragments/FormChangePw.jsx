import React from "react";
import useForm from "../../Hook/HookChagePassword";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const { formData, handleChange, handleSubmit, errors, message } = useForm(
    {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    null,
    // asusmsi API endpoint
    "/user/lupa",
    // jika sudah beres maka akan dialihkan
    "/profile"
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md mt-24 h-[70dvh] w-[80%] border border-neutral-300 mx-auto"
    >
      <div className="mb-4 w-[50%] mx-auto mt-20">
        <label className="block mb-2 text-sm font-medium pl-1">
          Old Password:
        </label>
        <input
          type="password"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          className="w-full p-2 pl-3 border rounded-lg bg-neutral-100"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">
          New Password:
        </label>
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="w-full p-2 pl-3 border rounded-lg bg-neutral-100"
        />
      </div>
      <div className="mb-4 w-[50%] mx-auto">
        <label className="block mb-2 text-sm font-medium pl-1">
          Confirm Password:
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 pl-3 border rounded-lg bg-neutral-100"
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
        )}
      </div>
      {message && <div className="text-red-500 text-sm">{message}</div>}
      <div className="flex justify-end mr-20">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mt-4"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="px-4 py-2 ml-4 bg-white border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-700 hover:text-white mt-4"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
