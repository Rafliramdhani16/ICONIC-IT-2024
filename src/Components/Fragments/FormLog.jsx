import React from "react";
import InputLog from "../Elements/Input/InputLog";
import { loginUser } from "../../Services/AuthLog";
import useForm from "../../Hook/HookFormLog";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const FormLog = () => {
  const navigate = useNavigate();
  const initialValues = { username: "", password: "" };
  const redirectPath = "/";

  const { formData, errors, message, handleChange, handleSubmit } = useForm(
    initialValues,
    loginUser,
    redirectPath
  );

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <button onClick={handleBack} type="button" className="flex items-center">
        <BiArrowBack className="text-neutral-800 w-5 h-5" />
        <span className="ml-2">Kembali</span>
      </button>
      <h2 className="text-3xl font-semibold text-neutral-800 my-6">Masuk</h2>
      {message && (
        <div className="bg-red-100 text-red-700 p-2 rounded my-2">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={["username", "password"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
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
          onClick={() => navigate("/daftar")}
          className="w-full font-semibold text-blue-600 bg-white py-2 border border-blue-600 rounded-full mt-4 hover:bg-blue-600 hover:text-white hover:border-blue-600 mb-4"
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default FormLog;
