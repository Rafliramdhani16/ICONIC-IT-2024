import React from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/footer";

const LayoutHome = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutHome;
