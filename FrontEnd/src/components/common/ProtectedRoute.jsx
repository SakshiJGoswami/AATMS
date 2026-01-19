import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AppLayout from "../layout/AppLayout";

function ProtectedRoute({ children, role }) {
  console.log(`ProtectedRoute is running with role ${role}`);

  const { authData } = useContext(AuthContext);

  if (!authData.isAuth) return <Navigate to="/login" />;

  if (role && !role.split(",").includes(authData.role)) {
    return <Navigate to="/login" />;
  }

  console.log(`ProtectedRoute is returning layout + page`);
  return <AppLayout>{children}</AppLayout>;
}

export default ProtectedRoute;
