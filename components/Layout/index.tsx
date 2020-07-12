import React from "react";
import Head from "next/head";

import { Body, Header, ActionsContainer } from "./styles";
import LanguageChanger from "@components/LanguageChanger";
import Navbar from "@components/Navbar";
import ThemeChanger from "@components/ThemeChanger";
import { PageProps } from "interfaces";

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
        <div>
          <h1>Massa demais</h1>
        </div>
      </Body>
    </>
  );
};

export default Layout;
