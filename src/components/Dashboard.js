import React from "react";
import { FaUserPlus, FaUserEdit, FaUserTimes, FaUserShield, FaTools } from "react-icons/fa";
import Layout from "./Layout";

const Dashboard = () => {
  const recentActions = [
    { id: 1, type: "Creation", detail: "Created user Ram", icon: <FaUserPlus /> },
    { id: 2, type: "Updation", detail: "Updated role for user Karun", icon: <FaUserEdit /> },
    { id: 3, type: "Deletion", detail: "Deleted user Mark Yash", icon: <FaUserTimes /> },
    { id: 4, type: "Creation", detail: "Created role Admin", icon: <FaUserShield /> },
    { id: 5, type: "Updation", detail: "Updated user profile for Sarah", icon: <FaTools /> },
    { id: 6, type: "Deletion", detail: "Deleted role Manager", icon: <FaUserTimes /> },
    { id: 7, type: "Creation", detail: "Created user Arjun", icon: <FaUserPlus /> },
    { id: 8, type: "Updation", detail: "Updated permissions for role Viewer", icon: <FaTools /> },
    { id: 9, type: "Deletion", detail: "Deleted user Krishna", icon: <FaUserTimes /> },
    { id: 10, type: "Creation", detail: "Created user Lokesh", icon: <FaUserPlus /> },
    { id: 11, type: "Updation", detail: "Updated email for user Emanvi", icon: <FaUserEdit /> },
    { id: 12, type: "Deletion", detail: "Deleted user Keerthi", icon: <FaUserTimes /> },
    { id: 13, type: "Creation", detail: "Created role Editor", icon: <FaUserShield /> },
    { id: 14, type: "Updation", detail: "Updated settings for role Contributor", icon: <FaTools /> },
    { id: 15, type: "Deletion", detail: "Deleted role Subscriber", icon: <FaUserTimes /> },
  ];
  return (
    <Layout>
      <div className="min-h-screen">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </header>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Actions</h2>
          <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Actions</h2>
        <ul className="divide-y divide-gray-200">
          {recentActions.map((action) => (
            <li key={action.id} className="flex items-center py-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex justify-center items-center mr-4">
                {action.icon}
              </div>
              <div className="flex-grow">
                <p className="font-medium text-gray-700">{action.type}</p>
                <p className="text-gray-500 text-sm">{action.detail}</p>
              </div>
              <span className="text-gray-400 text-sm">Just now</span>
            </li>
          ))}
        </ul>
      </section>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
