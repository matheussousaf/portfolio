import React from "react";
import { NavbarContainer, Option } from "./styles";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <Option>
          <span>👉 </span> Sobre
        </Option>
        <Option>
          <span>🔧 </span> Meu trabalho
        </Option>
        <Option>
          <span>📪 </span> Contato
        </Option>
        <Option>
          <span>📝 </span> Blog
        </Option>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
