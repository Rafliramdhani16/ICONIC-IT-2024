import { FaHome, FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineContentPaste } from "react-icons/md";

export const sidebarItems2 = [
  { path: "/dashboard", icon: FaHome, label: "Beranda" },
  { path: "/dashboard/semua/pengguna", icon: FaUser, label: "Pengguna" },
  {
    path: "/dashboard/semua/kategori",
    icon: BiSolidCategory,
    label: "Kategori",
  },
  { path: "/dashboard/semua/materi", icon: IoBookSharp, label: "Materi" },
  {
    path: "/dashboard/semua/modul",
    icon: MdOutlineContentPaste,
    label: "Modul",
  },
];
