import styled, { keyframes } from "styled-components";
import { calcFontSize } from "@styles/utils";

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;

  & > div {
    margin-right: 2vw;
  }
`;

export const Title = styled.h1`
  width: 60vw;
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  font-size: ${calcFontSize(30, 60)};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 5vh;
  margin-top: 0;
`;

export const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 5vh;
  width: 70vw;
  font-family: "Asap", sans-serif;
  font-size: ${calcFontSize(16, 21)};
  color: ${(props) => props.theme.colors.darkgray};
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }

  50% {
    transform: rotate(40deg)
  }

  75% {
    transform: rotate(-20deg)
  }

  100% {
    transform: rotate(0deg);
  }
`;

export const Intro = styled.p`
  margin: 20px 0;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.absoluteDarkGray};
  font-size: ${calcFontSize(18, 21)};
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Emoji = styled.span`
  font-size: ${calcFontSize(20, 23)};
  margin-left: 5px;

  :hover {
    writing-mode: vertical-rl;
    animation: ${rotate} 200ms linear;
  }
`;
