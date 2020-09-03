import styled from "styled-components";
import { LightningBolt } from "@styled-icons/heroicons-solid/LightningBolt";
import { calcFontSize } from "@styles/utils";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  flex-direction: row;
  padding: 2vh 8vw;
  flex-wrap: wrap;

  img {
    border-radius: 20px;
    width: 20vw;
  }

  div {
    flex: 1;
  }
`;

export const LightningIcon = styled(LightningBolt)`
  color: ${(props) => props.theme.colors.gray};
  margin: 0 auto;
  background: ${(props) => props.theme.colors.darkgray};
  border-radius: 50%;
  padding: 5px;
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
  font-family: "Asap", sans-serif;
  font-size: ${calcFontSize(16, 20)};
  color: ${(props) => props.theme.colors.darkgray};
`;

export const Cards = styled.div`
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  h3 {
    color: ${(props) => props.theme.colors.black};
    font-family: "Asap", sans-serif;
  }

  p {
    color: ${(props) => props.theme.colors.darkgray};
    font-family: "Asap", sans-serif;
  }
`;
