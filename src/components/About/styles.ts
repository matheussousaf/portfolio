import styled from "styled-components";
import { calcFontSize } from "@styles/utils";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  flex-direction: row;
  padding: 0 8vw;
  margin: 2vw;
  flex-wrap: wrap;

  img {
    border-radius: 20px;
    width: 20vw;
  }
`;

export const SubTitle = styled.h3`
  font-family: "Asap", sans-serif;
  font-size: ${calcFontSize(20, 22)};
  margin: 0;
  color: ${(props) => props.theme.colors.gray};
`;

export const Title = styled.h1`
  margin: 5vh 0 0 0;
  font-family: "Asap", sans-serif;
  font-size: ${calcFontSize(32, 36)};
  color: ${(props) => props.theme.colors.black};
`;

export const Description = styled.p`
  font-family: "Asiap", sans-serif;
  font-size: ${calcFontSize(16, 20)};
  color: ${(props) => props.theme.colors.darkgray};
`;

export const Cards = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
