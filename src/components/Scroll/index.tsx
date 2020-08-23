import React from "react";

import { Container, ScrollText, ScrollIcon, ScrollDown } from "./styles";
import { useAppContext } from "@contexts/app";

const Scroll: React.FC = () => {
  const { currentContent } = useAppContext();

  return (
    <>
      <ScrollDown>
        <Container>
          <ScrollText>{currentContent.scrollDownText}</ScrollText>
          <ScrollIcon size={30} />
        </Container>
      </ScrollDown>
    </>
  );
};

export default Scroll;
