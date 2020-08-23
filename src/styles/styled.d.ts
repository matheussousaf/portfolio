// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      absoluteWhite: string;
      absoluteBlack: string;
      absoluteGray: string;
      absoluteDarkGray: string;
      main: string;
      white: string;
      black: string;
      lightgray: string;
      gray: string;
      darkgray: string;
    };
  }
}
