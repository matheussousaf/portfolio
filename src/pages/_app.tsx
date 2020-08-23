import React from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";

const MyApp = ({ Component, pageProps }) => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  // Only Client-side
  if (process.browser) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default MyApp;
