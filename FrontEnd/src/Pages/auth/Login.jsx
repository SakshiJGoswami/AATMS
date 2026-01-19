import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  console.log(`Login is running`);

  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  function loginAs(role) {
    console.log(`loginAs is running with ${role}`);

    setAuthData({
      isAuth: true,
      role: role,
      user: { name: "Demo User" },
    });

    navigate(`/${role}/dashboard`);
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => loginAs("admin")}>Admin</button>
      <button onClick={() => loginAs("manager")}>Manager</button>
      <button onClick={() => loginAs("employee")}>Employee</button>
    </div>
  );
}

export default Login;
