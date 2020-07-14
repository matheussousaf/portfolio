import React from "react";
import { NavbarContainer, Option, Tooltip } from "./styles";

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <Option data-tip data-for="matters">
          <span>👉 </span> Sobre
          <Tooltip id="matters" place="bottom" effect="solid">
            <span>
              Opa!<span>✨</span>{" "}
            </span>
          </Tooltip>
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
