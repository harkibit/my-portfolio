import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Main, Heading, Paragraph } from "grommet";

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <meta name="description" content="About page - portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main pad="large">
        <Heading color="brand">About.</Heading>
        <Paragraph>Front End Web Developer</Paragraph>
      </Main>
    </div>
  );
}
