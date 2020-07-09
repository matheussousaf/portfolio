import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Asap", sans-serif;
  font-weight: bold;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vh;
  height: 10vh;
  margin-left: auto;

  @media (max-width: 1024px) {
    display: none;
  }
  
`;
export const Option = styled.h3`
  font-family: "Barlow";
  font-weight: bold;
  text-transform: uppercase;
  color: grey;
  transition: 200ms;
  cursor: pointer;

  :hover {
    transform: translateY(-5px);
  }
`;
export const ActionsContainer = styled.div``;
export const ChangeLanguage = styled.div``;
export const ChangeTheme = styled.div``;
