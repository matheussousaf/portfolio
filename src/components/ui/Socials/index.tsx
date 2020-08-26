import React, { useState } from "react";

import {
  Container,
  IconContainer,
  GithubIcon,
  LinkedinIcon,
  CodepenIcon,
  DiscordIcon,
  Close,
} from "./styles";

const Socials: React.FC = () => {
  const [hide, setHide] = useState(true);

  function handleClick() {
    setHide(!hide);
    console.log(hide);
  }

  return (
    <Container hide={hide}>
      <IconContainer>
        <GithubIcon id="icon" size={"3em"} />
      </IconContainer>
      <IconContainer>
        <LinkedinIcon id="icon" size={"3em"} />
      </IconContainer>
      <IconContainer>
        <DiscordIcon id="icon" size={"3em"} />
      </IconContainer>
      <IconContainer>
        <CodepenIcon id="icon" size={"3em"} />
      </IconContainer>
      <Close id="close" size={25} onClick={handleClick} />
    </Container>
  );
};

export default Socials;
