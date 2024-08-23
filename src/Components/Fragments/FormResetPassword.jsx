import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFormResetPassword from "../../Hook/HookResetPw";
import InputLog from "../Elements/Input/InputLog";
import { BiArrowBack } from "react-icons/bi";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const initialValues = { password: "", password2: "", token };
  const redirectPath = "/masuk";

  const { formData, errors, message, handleChange, handleSubmit } =
    useFormResetPassword(initialValues, () => {
      navigate(redirectPath);
    });

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <button
        onClick={() => navigate("/masuk")}
        type="button"
        className="flex items-center"
      >
        <BiArrowBack className="text-neutral-800 w-5 h-5" />
        <span className="ml-2">Kembali</span>
      </button>
      <h2 className="text-3xl font-semibold text-neutral-800 my-6">
        Masukan Sandi Baru
      </h2>
      {message && (
        <div className="bg-red-100 text-red-700 p-2 rounded my-2">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={["password", "password2"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 font-semibold"
        >
          Ganti Sandi
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
