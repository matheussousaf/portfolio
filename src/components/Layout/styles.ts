import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Asap", sans-serif;
  font-weight: bold;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  padding: 0 20vw 0 8vw;
  display: flex;
  flex: 1;
  min-height: 80%;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ChangeLanguage = styled.div``;
export const ChangeTheme = styled.div``;
