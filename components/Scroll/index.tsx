import React from "react";

import { Container, ScrollText, ScrollIcon, ScrollDown } from "./styles";

const Scroll: React.FC = () => {
  return (
    <>
      <ScrollDown>
        <Container>
          <ScrollText>Arraste para baixo</ScrollText>
          <ScrollIcon size={30} />
        </Container>
      </ScrollDown>
    </>
  );
};

export default Scroll;
