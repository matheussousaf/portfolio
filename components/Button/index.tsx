import React from "react";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  onClick?: Function;
  isPrimary?: boolean;
}

const Button: React.FC<Props> = ({ title, isPrimary }) => {
  return (
    <Container isPrimary={isPrimary}>
      <Title isPrimary={isPrimary}>{title}</Title>
    </Container>
  );
};

export default Button;
