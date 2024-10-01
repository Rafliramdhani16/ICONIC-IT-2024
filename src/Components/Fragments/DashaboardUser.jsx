import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import ModalEditUser from "../Elements/Modal/ModalEditUser";
import {
  getAllUsers,
  getUserById,
  getUserEdit,
} from "../../Services/Dashboard";

const DashboardUser = ({ token }) => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null); // Menyimpan detail user by ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // Modal untuk detail user

  // Panggilan API untuk mengambil semua user
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers(token);
        setUserData(users.data); // Sesuaikan dengan struktur respons API
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [token]);

  // Fungsi untuk membuka modal edit user
  const handleEditClick = async (userId) => {
    try {
      const userDetails = await getUserEdit(userId, token);
      setSelectedUser(userDetails.data); // Sesuaikan dengan struktur respons API
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Fungsi untuk membuka modal detail user
  const handleDetailClick = async (userId) => {
    try {
      const userDetail = await getUserById(userId, token);
      setUserDetails(userDetail.data); // Menyimpan detail user yang dipilih
      setIsDetailModalOpen(true); // Buka modal detail user
    } catch (error) {
      console.error("Error fetching user detail:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Full Name
              </th>
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Username
              </th>
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Email
              </th>
              <th className="border-b border-r border-gray-300 p-2 text-left">
                Role
              </th>
              <th className="border-b border-gray-300 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.uuid}>
                <td className="border-b border-r border-gray-300 p-2">{`${user.firstname} ${user.lastname}`}</td>
                <td className="border-b border-r border-gray-300 p-2">
                  {user.username}
                </td>
                <td className="border-b border-r border-gray-300 p-2">
                  {user.email}
                </td>
                <td className="border-b border-r border-gray-300 p-2">
                  {user.role.role}
                </td>
                <td className="border-b border-gray-300 p-2 text-center">
                  <button
                    className="text-green-500 hover:text-green-700 mr-3"
                    title="View Details"
                    onClick={() => handleDetailClick(user.uuid)}
                  >
                    <FaEye size={18} />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-3"
                    title="Edit"
                    onClick={() => handleEditClick(user.uuid)}
                  >
                    <FaEdit size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal untuk Edit User */}
      {isModalOpen && selectedUser && (
        <ModalEditUser onClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            <h2>Edit User</h2>
            <form>
              <div className="mb-4">
                <label>Username:</label>
                <input
                  type="text"
                  defaultValue={selectedUser.username}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label>First Name:</label>
                <input
                  type="text"
                  defaultValue={selectedUser.firstname}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label>Last Name:</label>
                <input
                  type="text"
                  defaultValue={selectedUser.lastname}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label>Email:</label>
                <input
                  type="email"
                  defaultValue={selectedUser.email}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label>Role:</label>
                <input
                  type="text"
                  defaultValue={selectedUser.role.role}
                  className="border p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2"
              >
                Save Changes
              </button>
            </form>
          </div>
        </ModalEditUser>
      )}

      {/* Modal untuk Detail User */}
      {isDetailModalOpen && userDetails && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p>
              Full Name: {`${userDetails.firstname} ${userDetails.lastname}`}
            </p>
            <p>Username: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>Role: {userDetails.role.role}</p>
            <button
              className="mt-4 bg-gray-300 px-4 py-2 rounded"
              onClick={() => setIsDetailModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardUser;
