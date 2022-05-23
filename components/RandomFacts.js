import React from "react";
import Image from "next/image";
import { Heading, Grid, Box, Paragraph } from "grommet";

import styles from "../styles/Home.module.css";

import randomFacts from "../public/images/randomFacts.png";

export default function RandomFacts() {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.randomFacts}>
        <Image src={randomFacts} alt="illustrator" />
        <div>
          <Heading>Random Facts</Heading>
          <ul className={styles.randomFactsList}>
            <li>I love Coffee</li>
            <li>English Literature Student</li>
            <li>Book Lover</li>
            <li>I have a dream of being a writer</li>
            <li>All kind sports girl lover</li>
            <li>I can't spend a day without dark chocolate</li>
            <li>
              Every few months I try to learn a non tech related, new skill.
              Drawing has been the latest one!
            </li>
            <li>Ballet Lover</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
