import React from "react";
import Layout from "@components/Layout";
import { GlobalStyle } from "@styles/GlobalStyle";
import AppContextProvider from "@contexts/index";
import Head from "next/head";
import fs from "fs";
import { Content } from "@interfaces/index";
import { GetStaticProps } from "next";

export interface Props {
  languages: Content[];
}

const IndexPage: React.FC<Props> = ({ languages }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:wght@400;600&family=Barlow:wght@700&family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Matheus Figueirêdo</title>
      </Head>
      <AppContextProvider languages={languages}>
        <GlobalStyle />
        <Layout />
      </AppContextProvider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/src/content/languages`);

  const languages = files.map((filename: string) => {
    const jsonContent = fs
      .readFileSync(`src/content/languages/${filename}`)
      .toString();

    return JSON.parse(jsonContent);
  });

  return {
    props: {
      languages,
    },
  };
};

export default IndexPage;
