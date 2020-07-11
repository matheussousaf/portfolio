import React, { useContext, createContext, useState } from "react";

// import { Container } from './styles';

interface App {
  theme: string;
  toggleTheme: () => void;
}

const AppContext = createContext({} as App);

const AppContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
