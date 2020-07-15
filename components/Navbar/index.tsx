import React from "react";
import { NavbarContainer, Container, Option, Tooltip, New } from "./styles";

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <Container>
          <Option>
            <span>👉 </span> Sobre
          </Option>
          <Tooltip>Entenda um pouco sobre mim</Tooltip>
        </Container>

        <Container>
          <Option>
            <span>🔧 </span> Trabalho
          </Option>
          <Tooltip>Veja um pouco do meu trabalho</Tooltip>
        </Container>
        <Container>
          <Option>
            <span>📪 </span> Contato
          </Option>
          <Tooltip>Quer falar comigo? Clica aqui!</Tooltip>
        </Container>
        <Container>
          <Option>
            <span>📝 </span> Blog
          </Option>

          <Tooltip>
            <New>Novidade!</New>
            Minha jornada! Em construção
          </Tooltip>
        </Container>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
