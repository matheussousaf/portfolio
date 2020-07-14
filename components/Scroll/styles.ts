import styled, { keyframes } from "styled-components";

import { DownArrowAlt } from "@styled-icons/boxicons-regular/DownArrowAlt";

export const Container = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ScrollIcon = styled(DownArrowAlt)`
  color: ${(props) => props.theme.colors.absoluteGray};
  margin: 0;
`;

export const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }

  33% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0px);
  }
`;

export const ScrollDown = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  animation: ${upAndDown} 2s linear infinite;
`;

export const ScrollText = styled.p`
  margin-bottom: 5px;
  font-family: "Barlow", sans-serif;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.absoluteGray};
`;
