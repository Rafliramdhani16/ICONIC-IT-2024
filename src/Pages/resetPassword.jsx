import React from "react";
import LayoutReset from "../Components/Layouts/LayoutReset";
import ReportVisitor from "../Context/FetchApi";

const ResetPassword = () => {
  return (
    <>
      <ReportVisitor />
      <LayoutReset isRequest={false} />
    </>
  );
};

export default ResetPassword;
