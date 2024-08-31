import React, { useState, useContext, createContext } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaHome, FaUser, FaEdit, FaKey } from "react-icons/fa";
import { PiCertificate, PiCertificateFill } from "react-icons/pi";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  const toggleSidebar = () => setExpanded((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ expanded, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}

const SidebarProfile = () => {
  const { expanded, toggleSidebar } = useSidebar();

  const menuItems = [
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

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gradient-to-b bg-white pt-16 transition-all duration-300 ease-in-out ${
        expanded ? "w-64" : "w-20"
      } md:relative md:translate-x-0 z-30`}
    >
      <div
        className={`flex justify-between items-center px-6 mb-8 ${
          expanded ? "" : "px-2"
        }`}
      >
        <h2
          className={`text-neutral-800 text-2xl font-semibold transition-opacity duration-300 ${
            expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          Pengaturan
        </h2>
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg text-neurtal-800 hover:bg-neutral-900 hover:bg-opacity-20 transition-colors duration-200"
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? (
            <MdKeyboardArrowLeft size={24} />
          ) : (
            <MdKeyboardArrowRight size={24} />
          )}
        </button>
      </div>
      <nav className="flex flex-col gap-4 px-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/profile"}
            className={({ isActive }) =>
              `text-black flex items-center gap-4 p-2 rounded-lg transition-all duration-200
              ${
                isActive
                  ? "font-semibold bg-blue-600 text-white"
                  : "hover:bg-neutral-800 hover:bg-opacity-10"
              }
              ${expanded ? "" : "justify-center"}
              group hover:scale-105 transform`
            }
          >
            <item.icon className={`text-xl ${expanded ? "" : "text-2xl"}`} />
            {expanded ? (
              <span>{item.label}</span>
            ) : (
              <div className="absolute left-full ml-2 px-2 py-1 bg-neutral-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-left whitespace-nowrap">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SidebarProfile;
