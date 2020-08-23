import React, { useEffect } from "react";

import {
  Container,
  ButtonContainer,
  Toggle,
  SunIcon,
  MoonIcon,
} from "./styles";
import useDarkMode from "use-dark-mode";

const ThemeChanger: React.FC = () => {
  const { enable, disable, value } = useDarkMode(false);

  useEffect(() => {
    console.log(value);
  }, []);

  function handleToggleTheme() {
    value ? disable() : enable();
    console.log(value);
  }

  return (
    <Container>
      <ButtonContainer active={value}>
        <SunIcon size={25} />
        <Toggle active={value} onClick={() => handleToggleTheme()} />
        <MoonIcon size={25} />
      </ButtonContainer>
    </Container>
  );
};

export default ThemeChanger;
