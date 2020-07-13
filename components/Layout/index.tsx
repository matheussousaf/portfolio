import React from "react";
import Head from "next/head";

import { Body, Header, ActionsContainer, Section } from "./styles";
import LanguageChanger from "@components/LanguageChanger";
import Navbar from "@components/Navbar";
import ThemeChanger from "@components/ThemeChanger";
import { PageProps } from "interfaces";
import Introduction from "@components/Introduction";

const Layout: React.FC<PageProps> = ({ title }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Barlow:wght@700&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Head>
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
