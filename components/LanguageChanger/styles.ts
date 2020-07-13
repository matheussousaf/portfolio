import styled from "styled-components";
import { Language } from "@styled-icons/ionicons-solid/Language";

export const LanguageIcon = styled(Language)`
  color: ${(props) => props.theme.colors.black};
  font-size: 10px;
`;

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  transition: 200ms;

  &:hover {
    background: ${(props) => props.theme.colors.lightgray};
  }
`;
