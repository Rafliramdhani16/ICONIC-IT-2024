import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const userData = [
  {
    uuid: "40e58aac-cfce-3bab-91b1-44fa95d7e729",
    firstname: "Bhadrika",
    lastname: "Aryaputra",
    username: "bhadrika05",
    email: "bhadrikaarya05@gmail.com",
  },
  {
    uuid: "3520fd1a-e6cc-3abb-966c-a381b56ffdaf",
    firstname: "rafli",
    lastname: "r",
    username: "rafli16",
    email: "rafliramdhani1611@gmail.com",
  },
];

const DashboardUser = () => {
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
              <th className="border-b border-gray-300 p-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.uuid}>
                <td className="border-b border-r border-gray-300 p-2">{`${user.firstname} ${user.lastname}`}</td>
                <td className="border-b border-r border-gray-300 p-2">
                  {user.username}
                </td>
                <td className="border-b border-r border-gray-300 p-2">
                  {user.email}
                </td>
                <td className="border-b border-gray-300 p-2 text-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-3"
                    title="Edit"
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
    </div>
  );
};

export default DashboardUser;
