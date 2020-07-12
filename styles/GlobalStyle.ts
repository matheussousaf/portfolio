import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    background: blue;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }

  #__next {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
  }
`;

export { GlobalStyle };
