import React from "react";
import Layout from "@components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@styles/themes";
import { GlobalStyle } from "@styles/GlobalStyle";
import AppContextProvider, { useAppContext } from "@contexts/app";

const IndexPage: React.FC = () => {
  return (
    <>
      <AppContextProvider>
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
        <Layout title="Matheus Figueirêdo" />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
