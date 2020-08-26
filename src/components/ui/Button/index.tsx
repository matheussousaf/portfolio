import React, { RefAttributes } from "react";

import { Container, Title } from "./styles";

interface Props extends RefAttributes<any> {
  title: string;
  isPrimary?: boolean;
}

const Button: React.FC<Props> = ({ title, isPrimary, ...props }) => {
  return (
    <Container {...props} isPrimary={isPrimary}>
      <Title isPrimary={isPrimary}>{title}</Title>
    </Container>
  );
};

export default Button;
