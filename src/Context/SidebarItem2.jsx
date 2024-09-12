import { FaHome, FaUser, FaEdit, FaKey } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export const sidebarItems = [
  { path: "/statistik", icon: FaHome, label: "Beranda" },
  { path: "/semua/user", icon: FaUser, label: "Pengguna" },
  { path: "/semua/kategori", icon: FaEdit, label: "Kategori" },
  { path: "/semua/materi", icon: FaKey, label: "Materi" },
  {
    path: "/semua/modul",
    icon: PiCertificateFill,
    label: "Modul",
  },
];
