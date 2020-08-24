import React, { useContext, createContext, useState, useEffect } from "react";
import { Content } from "@interfaces/index";
import { Props } from "@pages/index";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@styles/themes";

interface App {
  theme: any;
  toggleTheme: () => void;
  currentContent: Content;
  currentLanguage: LanguagesType;
  changeLanguage: (languageNumber: LanguagesType) => void;
}

export const Languages = {
  English: 0,
  Portuguese: 1,
} as const;

type LanguagesType = typeof Languages[keyof typeof Languages];

const AppContext = createContext({} as App);

const AppContextProvider: React.FC<Props> = ({ children, languages }) => {
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");
  const [currentContent, setCurrentContent] = useLocalStorage<Content>(
    "content",
    languages[Languages.Portuguese]
  );
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<LanguagesType>(
    "languages",
    Languages.Portuguese
  );

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function changeLanguage(languageNumber: LanguagesType) {
    setCurrentLanguage(languageNumber);
    setCurrentContent(languages[languageNumber]);
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
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
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {isMounted && children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
