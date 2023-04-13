import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("user_token")
  );

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    if (userToken) {
      setAuthorized(localStorage.getItem("user_token"));
    }
  }, []);

  const signout = () => {
    setUser(null);
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, authorized, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
