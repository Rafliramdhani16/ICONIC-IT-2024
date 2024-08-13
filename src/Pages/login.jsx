import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutLog from "../Components/Layouts/LayoutLog";

const LoginPage = () => {
  const navigate = useNavigate();
  const isLogin = true;

  return (
    <LayoutLog
      isLogin={isLogin}
      toggleForm={() => {
        navigate("/daftar");
      }}
    />
  );
};

export default LoginPage;
