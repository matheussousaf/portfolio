import styled from "styled-components";
import { calcFontSize } from "@styles/utils";

export const New = styled.span`
  background: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.absoluteWhite};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  margin-bottom: 10px;
  align-self: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background: ${(props) => props.theme.colors.gray};
    padding: 15px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    flex: 1;
    text-align: center;
    max-height: 5vh;

    span {
      margin-top: 5px;
      font-size: 25px;
    }
  }

  &:hover > div {
    position: absolute;
    background: red;
    text-align: center;
    background: ${(props) => props.theme.colors.lightgray};
    color: ${(props) => props.theme.colors.darkgray};
    font-family: "Barlow", sans-serif;
    text-transform: uppercase;
    border-radius: 5px;
    min-width: 100px;
    padding: 10px;
    font-size: 14px;
    top: 5em;
    display: flex;
    justify-content: center;
    transition: 0ms !important;
    flex-direction: column;

    &::before {
      top: -5px;
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      background: ${(props) => props.theme.colors.lightgray};
    }
  }
`;

export const Tooltip = styled.div`
  display: none;
`;

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
    /* background: ${(props) => props.theme.colors.lightgray}; */
    background: none;
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
