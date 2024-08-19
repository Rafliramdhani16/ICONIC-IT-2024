import { NavLink } from "react-router-dom";

const SidebarProfile = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 pt-28 px-6 w-64 h-screen">
      <h2 className="text-white text-2xl mb-8 font-semibold">Ubah Profil</h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center gap-2 font-semibold bg-white bg-opacity-20 p-2 rounded-lg"
              : "text-white flex items-center gap-2 hover:text-gray-200"
          }
        >
          <span>Kembali</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center gap-2 font-semibold bg-white bg-opacity-20 p-2 rounded-lg"
              : "text-white flex items-center gap-2 hover:text-gray-200"
          }
        >
          <span>Profile</span>
        </NavLink>
        <NavLink
          to="/profile/edit"
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center gap-2 font-semibold bg-white bg-opacity-20 p-2 rounded-lg"
              : "text-white flex items-center gap-2 hover:text-gray-200"
          }
        >
          <span>Edit Profile</span>
        </NavLink>
        <NavLink
          to="/changePassword"
          className={({ isActive }) =>
            isActive
              ? "text-white flex items-center gap-2 font-semibold bg-white bg-opacity-20 p-2 rounded-lg"
              : "text-white flex items-center gap-2 hover:text-gray-200"
          }
        >
          <span>Ganti Password</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default SidebarProfile;
