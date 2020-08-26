import React from "react";
import { NavbarContainer, Container, Option, Tooltip, New } from "./styles";
import { useAppContext } from "@contexts/index";

const Navbar: React.FC = () => {
  const { currentContent } = useAppContext();

  return (
    <>
      <NavbarContainer>
        <Container>
          <Option>
            <span>👉 </span> {currentContent.navbar.about}
          </Option>
          <Tooltip>{currentContent.navbar.aboutHint}</Tooltip>
        </Container>

        <Container>
          <Option>
            <span>🔧 </span> {currentContent.navbar.work}
          </Option>
          <Tooltip>{currentContent.navbar.workHint}</Tooltip>
        </Container>
        <Container>
          <Option>
            <span>📪 </span> {currentContent.navbar.contact}
          </Option>
          <Tooltip>{currentContent.navbar.contactHint}</Tooltip>
        </Container>
        <Container>
          <Option>
            <span>📝 </span> {currentContent.navbar.blog}
          </Option>

          <Tooltip>
            <New>{currentContent.navbar.new}!</New>
            {currentContent.navbar.blogHint}
          </Tooltip>
        </Container>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
