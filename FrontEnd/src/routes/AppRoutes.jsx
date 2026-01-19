import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManagerDashboard from "../pages/manager/ManagerDashboard";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import AnalyticsDashboard from "../pages/analytics/AnalyticsDashboard";
import ProtectedRoute from "../components/common/ProtectedRoute";

function AppRoutes() {
  console.log(`AppRoutes is running`);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/admin/dashboard" element={
        <ProtectedRoute role="admin">
          <AdminDashboard />
        </ProtectedRoute>
      } />

      <Route path="/manager/dashboard" element={
        <ProtectedRoute role="manager">
          <ManagerDashboard />
        </ProtectedRoute>
      } />

      <Route path="/employee/dashboard" element={
        <ProtectedRoute role="employee">
          <EmployeeDashboard />
        </ProtectedRoute>
      } />

      <Route path="/analytics" element={
        <ProtectedRoute role="admin,manager">
          <AnalyticsDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRoutes;
