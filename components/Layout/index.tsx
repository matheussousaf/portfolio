import React from "react";

import { Body, Header, ActionsContainer, Section } from "./styles";
import LanguageChanger from "@components/LanguageChanger";
import Navbar from "@components/Navbar";
import ThemeChanger from "@components/ThemeChanger";
import Introduction from "@components/Introduction";

const Layout: React.FC = () => {
  return (
    <>
      <Body>
        <Header>
          <Navbar />
          <ActionsContainer>
            <LanguageChanger />
            <ThemeChanger />
          </ActionsContainer>
        </Header>
        <Section>
          <Introduction />
        </Section>
      </Body>
    </>
  );
};

export default Layout;
