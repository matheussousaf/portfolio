import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Asap", sans-serif;
  font-weight: bold;
`;

export const Body = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  height: 80%;
  padding: 0 10vw;
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
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
