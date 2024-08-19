import { StrictMode } from "react";
import Home from "./Pages/home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Pages/404";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Kategori from "./Pages/kategoriHTML";
import MateriHTML from "./Pages/materiHTML";
import ResetPassword from "./Pages/resetPassword";
import RequestReset from "./Pages/reqPassword";
import DetailPembelajaran from "./Pages/DetailPembelajaran";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/editProfile";

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
    path: "/kategoriHTML",
    element: <Kategori />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detailMateri/:id",
    element: <MateriHTML />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pembelajaran/:id",
    element: <DetailPembelajaran />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gantiSandi",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lupaSandi",
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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
