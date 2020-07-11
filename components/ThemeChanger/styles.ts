import styled from "styled-components";
import { luminance } from "@styles/utils";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";

export const Container = styled.div`
  margin-left: auto;
`;

interface Props {
  active?: boolean;
}

export const ButtonContainer = styled.div<Props>`
  position: relative;
  width: 80px;
  height: 45px;
  background: ${(props) => luminance(props.theme.colors.light, -0.05)};
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
  background: ${(props) => luminance(props.theme.colors.light, -0.2)};
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
  position: absolute;
  color: white;
  font-size: 10px;
  left: 10px;
`;
export const SunIcon = styled(Sun)`
  position: absolute;
  color: #444;
  font-size: 10px;
  right: 8px;
`;