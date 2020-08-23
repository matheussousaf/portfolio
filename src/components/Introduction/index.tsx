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
import { useAppContext } from "@contexts/index";

const Introduction: React.FC = () => {
  const { currentContent } = useAppContext();

  return (
    <Container>
      <IntroContainer>
        <Intro>{currentContent.intro.introduction}</Intro>
        <Emoji>👋</Emoji>
      </IntroContainer>
      <Title>{currentContent.intro.title}</Title>
      <Subtitle>{currentContent.intro.subtitle}</Subtitle>
      <ButtonContainer>
        <Button title={currentContent.intro.mainButtonText} isPrimary />
        <Button title={currentContent.intro.secondaryButtonText} />
      </ButtonContainer>
    </Container>
  );
};

export default Introduction;
