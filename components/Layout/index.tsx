import React from "react";
import Head from "next/head";

import {
  Navbar,
  Option,
  ActionsContainer,
} from "./styles";
import Language from "@components/Language";

const Layout: React.FC = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Barlow:wght@700&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Matheus Figueirêdo | Developer</title>
      </Head>

      <Navbar>
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

        <ActionsContainer>
          <Language/>
        </ActionsContainer>
      </Navbar>
    </div>
  );
};

export default Layout;
