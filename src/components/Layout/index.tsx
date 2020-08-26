import React from "react";

import { Container, Body, Header, ActionsContainer, Section } from "./styles";
import LanguageChanger from "@components/ui/LanguageChanger";
import Navbar from "@components/ui/Navbar";
import ThemeChanger from "@components/ui/ThemeChanger";
import Introduction from "@components/Introduction";
import Scroll from "@components/ui/Scroll";
import Socials from "@components/ui/Socials";
import About from "@components/About";

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
        <About />
      </Body>
    </Container>
  );
};

export default Layout;
