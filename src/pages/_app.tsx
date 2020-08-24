import React from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import { GlobalStyle } from "@styles/GlobalStyle";

const MyApp = ({ Component, pageProps }) => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  // Only Client-side
  if (process.browser) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  } else {
    return (
      <div style={{ background: "red" }}>
        <p>Massa</p>
      </div>
    );
  }
};

export default MyApp;
