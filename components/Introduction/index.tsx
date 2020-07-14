import React from "react";

import {
  Container,
  ButtonContainer,
  IntroContainer,
  Title,
  Subtitle,
  Intro,
  Emoji,
} from "./styles";
import Button from "@components/Button";

const Introduction: React.FC = () => {
  return (
    <Container>
      <IntroContainer>
        <Intro>Me chamo Matheus</Intro>
        <Emoji>👋</Emoji>
      </IntroContainer>
      <Title>E eu construo software que importa.</Title>
      <Subtitle>
        Transformo suas ideias em soluções que trazem real valor e qualidade.
      </Subtitle>
      <ButtonContainer>
        <Button title="Meu trabalho" isPrimary />
        <Button title="Me contrate" />
      </ButtonContainer>
    </Container>
  );
};

export default Introduction;
