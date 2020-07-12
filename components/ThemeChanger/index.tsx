import React, { useState } from "react";

import {
  Container,
  ButtonContainer,
  Toggle,
  SunIcon,
  MoonIcon,
} from "./styles";
import { useAppContext } from "@contexts/app";

const ThemeChanger: React.FC = () => {
  const { toggleTheme, theme } = useAppContext();

  function handleToggleTheme() {
    toggleTheme();
  }

  return (
    <Container>
      <ButtonContainer active={theme === "dark"}>
        <SunIcon size={25} />
        <Toggle active={theme === "dark"} onClick={() => handleToggleTheme()} />
        <MoonIcon size={25} />
      </ButtonContainer>
    </Container>
  );
};

export default ThemeChanger;
