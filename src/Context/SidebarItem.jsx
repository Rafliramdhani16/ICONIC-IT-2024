import { FaHome, FaUser, FaEdit, FaKey } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export const sidebarItems = [
  { path: "/", icon: FaHome, label: "Beranda" },
  { path: "/profile", icon: FaUser, label: "Profile" },
  { path: "/profile/edit", icon: FaEdit, label: "Edit Profile" },
  { path: "/profile/ganti/password", icon: FaKey, label: "Ganti Password" },
  {
    path: "/profile/sertifikat",
    icon: PiCertificateFill,
    label: "Sertifikat",
  },
];
