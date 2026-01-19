import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  console.log(`AuthProvider is running`);

  const [authData, setAuthData] = useState({
    isAuth: false,
    role: null,
    user: null,
  });

  console.log(`AuthProvider is returning`, authData);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
