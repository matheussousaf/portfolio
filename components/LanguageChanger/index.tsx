import React, { useEffect } from "react";

import { Container, LanguageIcon } from "./styles";
import { useAppContext } from "@contexts/app";

const LanguageChanger: React.FC = () => {
  return (
    <Container >
      <LanguageIcon size={30} />
    </Container>
  );
};

export default LanguageChanger;
