import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import AdminDashboard from "./components/DashBoard/AdminDashBoard";
import SignUp from "./components/Authentication/SignUp";
import UserDashBoard from "./components/DashBoard/UserDashBoard";

const AppRoutes = ({ isAuthenticated = false }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/signup" element={<SignUp />} />
        {/* ************ Private Routes ************ */}
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin" />
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <UserDashBoard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
