import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (storedToken && storedUsername) {
      setUserToken(storedToken);
      setUsername(storedUsername);
      setIsAuth(true);
    }
  }, []);

  function login(token, name) {
    setUserToken(token);
    setUsername(name);
    setIsAuth(true);
    localStorage.setItem("token", token);
    localStorage.setItem("username", name);
  }

  function logout() {
    setUserToken(null);
    setUsername("");
    setIsAuth(false);
    localStorage.clear();
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ isAuth, userToken, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
