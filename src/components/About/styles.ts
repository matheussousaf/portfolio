import styled from "styled-components";
import { calcFontSize } from "@styles/utils";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: ${(props) => props.theme.colors.white};
`;

export const Title = styled.h1`
  margin-top: 5vh;
  font-family: "Asap", sans-serif;
  font-size: ${calcFontSize(32, 36)};
  color: ${(props) => props.theme.colors.black};
`;
