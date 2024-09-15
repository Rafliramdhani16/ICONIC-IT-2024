import { FaHome, FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineContentPaste } from "react-icons/md";

export const sidebarItems = [
  { path: "/statistik", icon: FaHome, label: "Beranda" },
  { path: "/semua/user", icon: FaUser, label: "Pengguna" },
  { path: "/semua/kategori", icon: BiSolidCategory, label: "Kategori" },
  { path: "/semua/materi", icon: IoBookSharp, label: "Materi" },
  {
    path: "/semua/modul",
    icon: MdOutlineContentPaste,
    label: "Modul",
  },
];
