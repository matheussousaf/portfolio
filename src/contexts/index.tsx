import React, { useContext, createContext, useState } from "react";
import { Content } from "@interfaces/index";
import { Props } from "@pages/index";

interface App {
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
  const [currentContent, setCurrentContent] = useState<Content>(
    languages[Languages.Portuguese]
  );

  const [currentLanguage, setCurrentLanguage] = useState<LanguagesType>(
    Languages.Portuguese
  );

  function changeLanguage(languageNumber: LanguagesType) {
    setCurrentLanguage(languageNumber);
    setCurrentContent(languages[languageNumber]);
  }

  return (
    <AppContext.Provider
      value={{
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
