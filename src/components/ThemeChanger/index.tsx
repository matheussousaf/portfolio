import React from "react";

import {
  Container,
  ButtonContainer,
  Toggle,
  SunIcon,
  MoonIcon,
} from "./styles";
import { useAppContext } from "@contexts/index";

const ThemeChanger: React.FC = () => {
  const { theme, toggleTheme } = useAppContext();

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
