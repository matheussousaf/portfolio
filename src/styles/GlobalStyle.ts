import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    transition: 150ms ease-in-out;
  }

  body {
    margin: 0;
    padding: 0;
    outline: 0;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #__next {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
  }
`;

export { GlobalStyle };
