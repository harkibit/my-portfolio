import React from "react";
import styles from "../styles/Home.module.css";

import { Grommet, Paragraph, Button } from "grommet";

export default function PieChart() {
  return (
    <section className={styles.donutContainer}>
      <div>
        <div className={styles.flex}>
          <div className={styles.primaryLabel}></div>&nbsp;&nbsp;
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
          acceptance rate with Re:Coded and Flatiron School, where we learned
          how to build responsive, user friendly websites using HTML5, CSS3,
          JavaScript advanced topics, and React.js.
        </Paragraph>
      </div>

      <div className={styles.donut}></div>

      <div>
        <div className={styles.mb3}>
          <div className={styles.flex}>
            <div className={styles.yellowLabel}></div>&nbsp;&nbsp;
            <span className={styles.roleTitle}>UI/UX Passionate</span>
          </div>
          <Paragraph>
            Design is my passion and I love to create beautiful, user friendly
            and intuitive interfaces UI. I get myself Enrolled in many UI/UX
            courses to dive deeper in this field and learn new skills.
          </Paragraph>
        </div>

        <>
          <div className={styles.flex}>
            <div className={styles.pinkLabel}></div>&nbsp;&nbsp;
            <span className={styles.roleTitle}>Backend End Developer</span>
          </div>
          <Paragraph>
            My aim is to build a solid foundation of knowledge in the backend.
            Therefore I learnt the fundamentals of building APIs with online
            courses. And as I am a Computer science student, I have the
            knowledge concerning databases and server side programming.
          </Paragraph>
        </>
      </div>
    </section>
  );
}
