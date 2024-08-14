import React from "react";
import useForm from "../../Hook/FormLog";
import { requestResetPassword } from "../../Services/AuthLog";
import InputLog from "../Elements/Input/InputLog";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const RequestResetPassword = () => {
  const navigate = useNavigate();
  const initialValues = { email: "" };
  const redirectPath = "/resetPassword";

  const { formData, errors, message, handleChange, handleSubmit } = useForm(
    initialValues,
    async (data) => {
      const response = await requestResetPassword(data);
      if (response.success === 200) {
        navigate(`${redirectPath}?token=${response.token}`);
      }
      return response;
    },
    redirectPath
  );
  const handleBack = () => {
    navigate("/masuk");
  };
  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
      <h2 className="text-3xl font-semibold text-neutral-800 mt-6">
        Reset Password
      </h2>
      <p className="text-sm mb-6 mt-1">
        Link reset password akan dikirimkan ke email anda
      </p>
      {message && (
        <div className="bg-red-100 text-red-700 p-2 rounded my-2">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <InputLog
          fields={["email"]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full mt-4 font-semibold"
        >
          Kirim Email
        </button>
      </form>
      <p className="text-center mt-4">atau</p>
      <button
        onClick={() => navigate("/masuk")}
        className="w-full font-semibold text-blue-600 bg-white py-2 border border-blue-600 rounded-full mt-4 hover:bg-blue-600 hover:text-white hover:border-blue-600"
      >
        Kembali ke Login
      </button>
    </div>
  );
};

export default RequestResetPassword;
