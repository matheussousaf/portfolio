import React from "react";
import Layout from "@components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@styles/themes";
import { GlobalStyle } from "@styles/GlobalStyle";
import AppContextProvider from "contexts/app";

const IndexPage: React.FC = () => {
  return (
    <>
      <AppContextProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Layout title="Matheus Figueirêdo" />;
        </ThemeProvider>
      </AppContextProvider>
    </>
  );
};

export default IndexPage;
