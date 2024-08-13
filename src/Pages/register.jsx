import React from "react";
import LayoutLog from "../Components/Layouts/LayoutLog";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const isLogin = false;

  return (
    <LayoutLog
      isLogin={isLogin}
      toggleForm={() => {
        navigate("/masuk");
      }}
    />
  );
};

export default RegisterPage;
