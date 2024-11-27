import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RBACContext = createContext();

export const useRBACContext = () => {
  const context = useContext(RBACContext);
  return context;
};

export const setDummyData = () => {
  const rolesArray = JSON.parse(localStorage.getItem("roles"));
  if (!rolesArray?.length) {
    const roles = [
      {
        id: 1,
        name: "ADMIN",
        permissions: ["Read", "Write", "Delete", "Manage Users", "Manage Roles"],
      },
    ];
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  const usersArray = JSON.parse(localStorage.getItem("users"));
  if (!usersArray?.length) {
    const users = [
      { id: 1, name: "ADMIN", email: "admin@gmail.com", role: "ADMIN", status: "ACTIVE", password:"Password@123" },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
};

const RBACProvider = ({ children }) => {
  const getRoles = () => JSON.parse(localStorage.getItem("roles")) ?? [];
  const getUsers = () => JSON.parse(localStorage.getItem("users")) ?? [];
  const getIsLoggedIn = () => !!localStorage.getItem("logged_in_user");

  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    // Insert dummy data if not present
    setDummyData();

    // Update state after setting dummy data
    setRoles(getRoles());
    setUsers(getUsers());
  }, []);

  const addRole = (newRole) => {
    const updatedRoles = [...roles, { ...newRole, id: Date.now() }];
    setRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
  };

  const updateRole = (id, updatedRole) => {
    const updatedRoles = roles.map((role) =>
      role.id === id ? { ...role, ...updatedRole } : role
    );
    setRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
  };

  const deleteRole = (id) => {
    const updatedRoles = roles.filter((role) => role.id !== id);
    setRoles(updatedRoles);
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
  };

  const addUser = (newUser) => {
    const updatedUsers = [...users, { ...newUser, id: Date.now() }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const updateUser = (id, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const login = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("logged_in_user");
    setIsLoggedIn(false);
    navigate("/login", { replace: true });
  };

  return (
    <RBACContext.Provider
      value={{
        roles,
        addRole,
        updateRole,
        deleteRole,
        users,
        addUser,
        updateUser,
        deleteUser,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </RBACContext.Provider>
  );
};

export default RBACProvider;
