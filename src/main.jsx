import { StrictMode } from "react";
import Home from "./Pages/home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ErrorPage from "./Pages/404";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Kategori from "./Pages/kategoriHTML";
import DetailMateri from "./Pages/materiHTML";
import MateriHTML from "./Pages/materiHTML";
import ResetPassword from "./Pages/resetPassword";
import RequestReset from "./Pages/reqPassword";

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
    path: "/gantiSandi",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lupaSandi",
    element: <RequestReset />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
