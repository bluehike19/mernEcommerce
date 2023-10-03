import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [bodyClass, setBodyClass] = useState("dark-mode");

  useEffect(() => {
    document.body.className = bodyClass;
  }, [isDarkMode, bodyClass]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setBodyClass(isDarkMode ? "light-mode" : "dark-mode");
  };
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
