import React, { useState } from "react";

import { Container, ButtonContainer, Toggle, SunIcon, MoonIcon } from "./styles";

const ThemeChanger: React.FC = () => {
  const [isLight, setLight] = useState(false);
  return (
    <Container>
      <ButtonContainer active={isLight}>
        <SunIcon size={25} />
        <Toggle active={isLight} onClick={() => setLight(!isLight)} />
        <MoonIcon size={25} />
      </ButtonContainer>
    </Container>
  );
};

export default ThemeChanger;
