import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Sidebar() {
  console.log(`Sidebar is running`);

  const { authData } = useContext(AuthContext);

  return (
    <aside className="sidebar">
      <p>Role: {authData.role}</p>

      <ul>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Tasks</li>
        {(authData.role === "admin" || authData.role === "manager") && (
          <li>Analytics</li>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
