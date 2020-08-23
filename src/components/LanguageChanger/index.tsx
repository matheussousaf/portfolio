import React from "react";

import { Container, LanguageIcon } from "./styles";
import { useAppContext, Languages } from "@contexts/app";

const LanguageChanger: React.FC = () => {
  const { changeLanguage, currentLanguage } = useAppContext();

  function toggleTheme() {
    if (currentLanguage === Languages.Portuguese) {
      changeLanguage(Languages.English);
    } else {
      changeLanguage(Languages.Portuguese);
    }
  }

  return (
    <Container onClick={toggleTheme}>
      <LanguageIcon size={30} />
    </Container>
  );
};

export default LanguageChanger;
