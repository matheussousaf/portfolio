import React from "react";
import Layout from "@components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/themes";
import { GlobalStyle } from "styles/GlobalStyle";

const IndexPage: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Layout />;
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
