import styled from "styled-components";
import { Language } from "@styled-icons/ionicons-solid/Language";
import { luminance } from "styles/luminance";

export const LanguageIcon = styled(Language)`
  color: #222;
  font-size: 10px;
`;

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => luminance(props.theme.colors.light, -0.05)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  transition: 200ms;

  &:hover {
    background: ${(props) => luminance(props.theme.colors.light, -0.1)};
  }
`;
