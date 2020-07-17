import React, { useContext, createContext, useEffect, useState } from "react";

interface App {
  theme: string;
  toggleTheme: () => void;
}

const AppContext = createContext({} as App);

const AppContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  function toggleTheme() {
    const themeColor = theme === "light" ? "dark" : "light";
    setTheme(themeColor);
    localStorage.setItem("theme", themeColor);
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
