import React, { useContext, createContext, useEffect, useState } from "react";
import { Content } from "@interfaces/index";
import { Props } from "@pages/index";

interface App {
  theme: string;
  currentContent: Content;
  currentLanguage: LanguagesType;
  toggleTheme: () => void;
  changeLanguage: (languageNumber: LanguagesType) => void;
}

export const Languages = {
  English: 0,
  Portuguese: 1,
} as const;

type LanguagesType = typeof Languages[keyof typeof Languages];

const AppContext = createContext({} as App);

const AppContextProvider: React.FC<Props> = ({ children, languages }) => {
  const [theme, setTheme] = useState("light");
  const [currentContent, setCurrentContent] = useState<Content>(
    languages[Languages.Portuguese]
  );

  const [currentLanguage, setCurrentLanguage] = useState<LanguagesType>(
    Languages.Portuguese
  );

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  function toggleTheme() {
    const themeColor = theme === "light" ? "dark" : "light";
    setTheme(themeColor);
    localStorage.setItem("theme", themeColor);
  }

  function changeLanguage(languageNumber: LanguagesType) {
    setCurrentLanguage(languageNumber);
    setCurrentContent(languages[languageNumber]);
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentContent,
        currentLanguage,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
