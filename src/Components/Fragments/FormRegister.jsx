import React from "react";
import InputLog from "../Elements/Input/InputLog";
import { registerUser } from "../../Services/AuthLog";
import useForm from "../../Hook/HookFormLog";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const FormRegister = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  const redirectPath = "/masuk";
  const navigate = useNavigate();
  const { formData, errors, message, handleChange, handleSubmit } = useForm(
    initialValues,
    registerUser,
    redirectPath
  );
  const handleBack = () => {
    navigate("/masuk");
  };
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <button
        onClick={handleBack}
        type="button"
        className="flex items-center mb-6"
      >
        <BiArrowBack className="text-neutral-800 w-5 h-5" />
        <span className="ml-2">Kembali</span>
      </button>
      <h2 className="text-3xl font-semibold text-neutral-800 my-6">Daftar</h2>
      {message && (
        <div className="bg-red-100 text-red-700 p-2 rounded my-2">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={[
            "firstname",
            "lastname",
            "username",
            "email",
            "password",
            "password2",
          ]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 font-semibold"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
