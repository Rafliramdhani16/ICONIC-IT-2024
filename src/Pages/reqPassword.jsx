import React from "react";
import LayoutReset from "../Components/Layouts/LayoutReset";
import ReportVisitor from "../Context/FetchApi";

const RequestReset = () => {
  return (
    <>
      <ReportVisitor />
      <LayoutReset isRequest={true} />
    </>
  );
};

export default RequestReset;
