import React from "react";
import Layout from "@components/Layout";
import { ThemeProvider, ServerStyleSheet } from "styled-components";
import { lightTheme, darkTheme } from "@styles/themes";
import { GlobalStyle } from "@styles/GlobalStyle";
import AppContextProvider, { useAppContext } from "@contexts/app";
import Head from "next/head";

const IndexPage: React.FC = () => {
  return (
    <>
      <AppContextProvider>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Barlow:wght@700&family=Manrope:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <title>Matheus Figueirêdo</title>
        </Head>
        <Main />
      </AppContextProvider>
    </>
  );
};

const Main: React.FC = () => {
  const { theme } = useAppContext();

  console.log(theme);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
