import styled from "styled-components";
import { calcFontSize } from "@styles/utils";

export const Container = styled.div``;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vh;
  height: 10vh;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    bottom: 0;
    position: fixed;
    font-size: ${calcFontSize(10, 20)};
    background: ${(props) => props.theme.colors.lightgray};
  }
`;
export const Option = styled.h3`
  font-family: "Barlow";
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.darkgray};
  transition: 200ms;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.black};
  }
`;
