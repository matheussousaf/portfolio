import styled, { css } from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Discord } from "@styled-icons/boxicons-logos/Discord";
import { Codepen } from "@styled-icons/boxicons-logos/Codepen";
import { ArrowUp } from "@styled-icons/evaicons-solid/ArrowUp";

interface Props {
  hide?: boolean;
}

export const Container = styled.div<Props>`
  display: none;
  @media (min-width: 900px) and (orientation: landscape) {
    position: fixed;
    right: 5vh;
    height: 40%;
    width: 4em;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.lightgray};
    padding: 15px 0;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: 250ms;
    ${({ hide }) =>
      hide &&
      css`
        height: 30px;
        align-items: center;
        justify-content: center;

        > div {
          opacity: 0;
        }

        #icon {
          display: none;
        }

        #close {
          transform: rotate(180deg);
        }
      `}
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 700ms;
`;

export const GithubIcon = styled(Github)`
  cursor: pointer;
  transition: 50ms;
  color: ${(props) => props.theme.colors.gray};
  &:hover {
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
export const LinkedinIcon = styled(LinkedinSquare)`
  cursor: pointer;
  transition: 50ms;
  color: ${(props) => props.theme.colors.gray};
  &:hover {
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
export const DiscordIcon = styled(Discord)`
  cursor: pointer;
  transition: 50ms;
  color: ${(props) => props.theme.colors.gray};
  &:hover {
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
export const CodepenIcon = styled(Codepen)`
  cursor: pointer;
  transition: 50ms;
  color: ${(props) => props.theme.colors.gray};
  &:hover {
    color: ${(props) => props.theme.colors.darkgray};
  }
`;

export const Close = styled(ArrowUp)`
  color: ${(props) => props.theme.colors.darkgray};
  cursor: pointer;
  transition: 500ms;
`;
