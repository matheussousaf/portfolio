import React from "react";

import { Container, ButtonContainer, Title, Subtitle, Intro } from "./styles";
import Button from "@components/Button";

const Introduction: React.FC = () => {
  return (
    <Container>
      <Intro>
        Me chamo Matheus<span>✌</span>
      </Intro>
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
