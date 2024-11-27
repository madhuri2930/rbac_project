import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import RBACProvider, { useRBACContext } from "./contexts/RBACContext";
import Sidebar from "./components/Sidebar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <RBACProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <RenderRoutes />
      </RBACProvider>
    </Router>
  );
}

export default App;

const RenderRoutes = () => {
  const navigator = useNavigate();
  const { isLoggedIn } = useRBACContext();
  useEffect(() => {
    if (!isLoggedIn) {
      navigator("/login", { replace: true });
    }
  }, [isLoggedIn, navigator]);

  if (!isLoggedIn) return <></>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
        </Routes>
      </div>
    </div>
  );
};
