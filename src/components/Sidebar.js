import React from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon, UserIcon, KeyIcon } from "@heroicons/react/outline";
import { useRBACContext } from "../contexts/RBACContext";

const Sidebar = () => {
  const { logout } = useRBACContext();

  const navItems = [
    { name: "Dashboard", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "Users", path: "/users", icon: <UserIcon className="h-6 w-6" /> },
    { name: "Roles", path: "/roles", icon: <KeyIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50">
      <div className="p-6 text-lg font-bold text-center border-b">
        RBAC {localStorage.getItem("logged_in_user")}
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 text-gray-600 hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
          >
            {item.icon}
            <span className="ml-4">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="px-4">
        <button
          onClick={logout}
          className="w-full flex justify-center items-center mt-6 px-4 py-2 bg-red-700 rounded-md hover:bg-red-600"
        >
          <span className="text-white">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
