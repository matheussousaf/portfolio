import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline: 0;
    color: ${(props) => (props.theme.colors.main ? "white" : "black")};
  }
`;

export { GlobalStyle };
