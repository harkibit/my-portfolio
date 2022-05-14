import React from "react";
import styles from "../styles/Home.module.css";

import { Heading, Grid, Box } from "grommet";

export default function Portfolio() {
  return (
    <div className={styles.componentContainer}>
      <Heading>Portfolio</Heading>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}></div>
        <div className={styles.projectCard}></div>
        <div className={styles.projectCard}></div>
      </div>
    </div>
  );
}
