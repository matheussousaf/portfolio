import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Asap", sans-serif;
  font-weight: bold;
`;

export const Body = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background: red;
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
