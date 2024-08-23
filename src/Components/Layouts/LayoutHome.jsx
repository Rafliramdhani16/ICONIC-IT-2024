import React from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";

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
