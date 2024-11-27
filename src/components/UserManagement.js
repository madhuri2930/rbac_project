import React, { useContext, useState } from "react";
import { RBACContext } from "../contexts/RBACContext";
import CreateUserModal from "./CreateUserModal";
import Layout from "./Layout";

const UserManagement = () => {
  const { users, deleteUser } = useContext(RBACContext);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Management</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSelectedUser({})}
          >
            Add User
          </button>
        </div>
        <table className="table-auto w-full bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.status}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => setSelectedUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedUser && (
          <CreateUserModal
            user={selectedUser.id ? selectedUser : null}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </Layout>
  );
};

export default UserManagement;
