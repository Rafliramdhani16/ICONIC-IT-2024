import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthLogContext";
import ModalLogin from "../Components/Elements/Modal/ModalLogin";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <>
        <ModalLogin
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          onLogin={() => {
            window.location.href = `/masuk?redirect=${encodeURIComponent(
              location.pathname
            )}`;
          }}
          message="Anda harus login terlebih dahulu untuk mengakses materi ini."
        />
        {!showModal && <div>Konten yang tidak dapat diakses</div>}
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
