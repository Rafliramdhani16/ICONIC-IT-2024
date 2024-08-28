import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthLogContext";
import LoginModal from "../Components/Elements/Modal/ModalLogin";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);

  if (!user) {
    return (
      <>
        <LoginModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          onLogin={() => {
            window.location.href = `/masuk?redirect=${encodeURIComponent(
              location.pathname
            )}`;
          }}
          message="Anda harus login terlebih dahulu untuk mengakses materi ini."
        />
        {!showModal && <Navigate to="/" replace />}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
