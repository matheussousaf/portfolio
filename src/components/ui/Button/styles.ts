import styled from "styled-components";
import { luminance, calcFontSize } from "@styles/utils";

export const Container = styled.div<Props>`
  width: 15vh;
  height: 5vh;
  background: ${(props) =>
    props.isPrimary
      ? props.theme.colors.main
      : props.theme.colors.absoluteGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 768px) {
    &:hover {
      background: ${(props) =>
        props.isPrimary
          ? luminance(props.theme.colors.main, -0.2)
          : luminance(props.theme.colors.absoluteGray, -0.2)};
    }
  }

  @media (max-width: 768px) {
    &:active {
      background: ${(props) =>
        props.isPrimary
          ? luminance(props.theme.colors.main, -0.2)
          : luminance(props.theme.colors.absoluteGray, -0.2)};
    }
  }


`;

interface Props {
  isPrimary?: boolean;
}

export const Title = styled.p<Props>`
  font-family: "Asap", sans-serif;
  font-size: ${calcFontSize(16, 18)};
  font-weight: bold;
  color: ${(props) =>
    props.isPrimary
      ? props.theme.colors.absoluteWhite
      : props.theme.colors.absoluteBlack};
`;
