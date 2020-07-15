import styled from "styled-components";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";

export const Container = styled.div`
  margin-left: auto;
  margin-right: 2vh;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

interface Props {
  active?: boolean;
}

export const ButtonContainer = styled.div<Props>`
  position: relative;
  width: 80px;
  height: 45px;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 10px;
  padding: 0;
  display: flex;
  align-items: center;
  margin: 0 20px;
  transition: 100ms;

  ${({ active, theme }) =>
    active &&
    `background: ${theme.colors.main};
  `}
`;

export const Toggle = styled.div<Props>`
  background: ${(props) => props.theme.colors.gray};
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  transition: 200ms ease-in-out;
  z-index: 5;

  ${({ active }) =>
    active &&
    `
    transform: translateX(40px);
  `}
`;
export const MoonIcon = styled(Moon)`
  transition: 0ms !important;
  position: absolute;
  color: ${(props) => props.theme.colors.black};
  font-size: 10px;
  left: 10px;
`;
export const SunIcon = styled(Sun)`
  transition: 0ms !important;
  position: absolute;
  color: ${(props) => props.theme.colors.black};
  font-size: 10px;
  right: 8px;
`;
