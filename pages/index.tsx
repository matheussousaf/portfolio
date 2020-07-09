import React from "react";
import Head from "next/head";
import Header from "@components/Header";

const IndexPage: React.FC = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Barlow:wght@700&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Matheus Figueirêdo | Developer</title>
      </Head>
      <h1>Testando</h1>
      <Header />
    </div>
  );
};

export default IndexPage;
