import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import ModalSession from "../Components/Elements/Modal/ModalSession";
import { useAuth } from "./AuthLogContext";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const { logout, user } = useAuth();
  const [isSessionExpired, setSessionExpired] = useState(false);

  const handleStorageChange = useCallback(
    (event) => {
      if (
        (event.key === "token" || event.key === "username") &&
        event.oldValue
      ) {
        if (event.newValue === null || event.oldValue !== event.newValue) {
          setSessionExpired(true);
          logout();
        }
      }
    },
    [logout]
  );

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    const token = sessionStorage.getItem("token");
    const username = sessionStorage.getItem("username");
    if (token && username) {
      sessionStorage.setItem("wasLoggedIn", "true");
    } else if (sessionStorage.getItem("wasLoggedIn") === "true") {
      setSessionExpired(true);
      logout();
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [handleStorageChange, logout]);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("wasLoggedIn", "true");
    } else {
      sessionStorage.removeItem("wasLoggedIn");
    }
  }, [user]);

  const resetSession = useCallback(() => {
    setSessionExpired(false);
    sessionStorage.removeItem("wasLoggedIn");
  }, []);

  return (
    <SessionContext.Provider value={{ isSessionExpired, resetSession }}>
      {children}
      {isSessionExpired && (
        <ModalSession
          message="Session Anda telah kadaluwarsa atau data login telah diubah. Silakan log in kembali."
          onClose={resetSession}
        />
      )}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
