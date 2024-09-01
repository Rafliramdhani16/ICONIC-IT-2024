import React from "react";
import LayoutLog from "../Components/Layouts/LayoutLog";
import ReportVisitor from "../Context/FetchApi";

const RegisterPage = () => {
  const isLogin = false;

  return (
    <>
      <ReportVisitor />
      <LayoutLog
        isLogin={isLogin}
        toggleForm={() => {
          navigate("/masuk");
        }}
      />
    </>
  );
};

export default RegisterPage;
