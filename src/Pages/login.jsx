import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutLog from "../Components/Layouts/LayoutLog";
import ReportVisitor from "../Context/FetchApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const isLogin = true;

  return (
    <>
      <ReportVisitor />
      <LayoutLog
        isLogin={isLogin}
        toggleForm={() => {
          navigate("/daftar");
        }}
      ></LayoutLog>
    </>
  );
};

export default LoginPage;
