"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchUserData, logout } from "../api/users";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((userData) => {
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setUserAndStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const clearUserAndStorage = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      clearUserAndStorage();
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser: setUserAndStorage, logout: handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
