import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  borderRadius: "10px",
  colors: {
    absoluteWhite: "#fff",
    absoluteBlack: "#111",
    absoluteGray: "#d4d4d4",
    absoluteDarkGray: "#949494",
    main: "#353BCF",
    white: "#fff",
    black: "#222",
    lightgray: "#efefef",
    gray: "#D4D4D4",
    darkgray: "#949494",
  },
};

const darkTheme: DefaultTheme = {
  borderRadius: "10px",
  colors: {
    absoluteWhite: "#fff",
    absoluteBlack: "#111",
    absoluteGray: "#d4d4d4",
    absoluteDarkGray: "#949494",
    main: "#353BCF",
    white: "#333",
    black: "#efefef",
    lightgray: "#555",
    gray: "#222",
    darkgray: "#949494",
  },
};

export { lightTheme, darkTheme };
