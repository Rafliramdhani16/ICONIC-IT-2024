import { StrictMode } from "react";
import Home from "./Pages/home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Pages/404";
import Login from "./Pages/login";
import Register from "./Pages/register";
import KategoriId from "./Pages/kategoriId";
import MateriId from "./Pages/materiId";
import ResetPassword from "./Pages/resetPassword";
import RequestReset from "./Pages/reqPassword";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/editProfile";
import ChangePassword from "./Pages/changepw";
import Sertifikat from "./Pages/serti";
import PageModulDetail from "./Pages/modulDetail";
import { AuthProvider } from "./Context/AuthLogContext";
import ProtectedRoute from "./Context/Protect";
import { SessionProvider } from "./Context/SessionProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/masuk",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/daftar",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gantisandi",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lupasandi",
    element: <RequestReset />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/edit",
    element: <EditProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/ganti/password",
    element: <ChangePassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/sertifikat",
    element: <Sertifikat />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/kategori/:id",
    element: <KategoriId />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/materi/:materiId",
    element: (
      <ProtectedRoute>
        <MateriId />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/materi/:materiId/:modulId",
    element: (
      <ProtectedRoute>
        <PageModulDetail />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <SessionProvider>
        <RouterProvider router={router} />
      </SessionProvider>
    </AuthProvider>
  </StrictMode>
);
