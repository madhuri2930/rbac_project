import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 overflow-y-auto p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
