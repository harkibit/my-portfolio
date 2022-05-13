import React from "react";
import styles from "../styles/Home.module.css";

import { Grommet, Paragraph, Button } from "grommet";

export default function PieChart() {
  return (
    <section className={styles.donutContainer}>
      <div>
        <div>
          <span></span>
          <span className={styles.roleTitle}>Front End Developer</span>
        </div>
        <Paragraph>
          Front End Web developer with 1+ years of experience in building
          aesthetic, pixel perfect websites using latest Frontend Technologies
          including React.js, WordPress, HTML5, CSS3, JavaScript, jQuery,
          Bootstrap, Sass, Material UI and more.
          <br />
          <br />
          Graduated from a 6 months long Frontend coding bootcamp with 6%
          acceptance rate with Re:Coded and Flatiron School.
        </Paragraph>
      </div>

      <div className={styles.donut}></div>

      <div>
        <div className={styles.mb3}>
          <div>
            <span></span>
            <span className={styles.roleTitle}>UI/UX Passionate</span>
          </div>
          <Paragraph>
            Front End Web Developer, Passionate about UI/UX, Learning Backend
            Developement
          </Paragraph>
        </div>

        <>
          <div>
            <span></span>
            <span className={styles.roleTitle}>Backend End Developer</span>
          </div>
          <Paragraph>
            Front End Web Developer, Passionate about UI/UX, Learning Backend
            Developement
          </Paragraph>
        </>
      </div>
    </section>
  );
}
