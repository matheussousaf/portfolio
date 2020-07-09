import styled from "styled-components";
import { Language } from "@styled-icons/ionicons-solid/Language";
import { luminance } from "@styles/utils";

export const LanguageIcon = styled(Language)`
  color: #444;
  font-size: 10px;
`;

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => luminance(props.theme.colors.light, -0.05)};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  transition: 200ms;

  &:hover {
    background: ${(props) => luminance(props.theme.colors.light, -0.1)};
  }
`;
