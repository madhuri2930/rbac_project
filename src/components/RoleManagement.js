import React, { useContext, useState } from "react";
import { RBACContext } from "../contexts/RBACContext";
import CreateRoleModal from "./CreateRoleModal";
import Layout from "./Layout";

const RoleManagement = () => {
  const { roles, deleteRole } = useContext(RBACContext);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Role Management</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSelectedRole({})}
          >
            Add Role
          </button>
        </div>
        <table className="table-auto w-full bg-white shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left">Role Name</th>
              <th className="px-6 py-3 text-left">Permissions</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b">
                <td className="px-6 py-4">{role.name}</td>
                <td className="px-6 py-4">{role.permissions.join(", ")}</td>
                <td className="px-6 py-4">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => setSelectedRole(role)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => deleteRole(role.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedRole && (
          <CreateRoleModal
            role={selectedRole.id ? selectedRole : null}
            onClose={() => setSelectedRole(null)}
          />
        )}
      </div>
    </Layout>
  );
};

export default RoleManagement;
