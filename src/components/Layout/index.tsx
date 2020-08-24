import React from "react";

import { Container, Body, Header, ActionsContainer, Section } from "./styles";
import LanguageChanger from "@components/LanguageChanger";
import Navbar from "@components/Navbar";
import ThemeChanger from "@components/ThemeChanger";
import Introduction from "@components/Introduction";
import Scroll from "@components/Scroll";
import Socials from "@components/Socials";

const Layout: React.FC = () => {
  return (
    <Container>
      <Body>
        <Header>
          <Navbar />
          <ActionsContainer>
            <LanguageChanger />
            <ThemeChanger />
          </ActionsContainer>
        </Header>
        <Section>
          <Socials />
          <Introduction />
        </Section>
        <Scroll />
      </Body>
    </Container>
  );
};

export default Layout;
