import React from "react";
import Head from "next/head";

import {Body, Header, ActionsContainer } from "./styles";
import LanguageChanger from "@components/LanguageChanger";
import Navbar from "@components/Navbar";
import ThemeChanger from "@components/ThemeChanger";

const Layout: React.FC = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Barlow:wght@700&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Matheus Figueirêdo | Developer</title>
      </Head>
      <Body>
        <Header>
          <Navbar />
          <ActionsContainer>
            <LanguageChanger />
            <ThemeChanger />
          </ActionsContainer>
        </Header>
      </Body>
    </div>
  );
};

export default Layout;
