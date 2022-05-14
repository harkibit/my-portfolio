import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Heading, Grid, Box, Paragraph } from "grommet";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

export default function Portfolio() {
  return (
    <div className={styles.componentContainer}>
      <Heading>Portfolio</Heading>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard} style={{ borderColor: "#7d4cdb" }}>
          <div className={styles.projectHeading}>
            <h2>Discover North Lebanon</h2>
            <div>
              <a
                href="https://discover-north-lebanon-b58aa.web.app/"
                target="_blank"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/harkibit/discover-north-lebanon"
                target="_blank"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <Paragraph>
            Discover North Lebanon was our final project with the bootcamp. It
            has all the places that can be visited by tourist in North Lebanon.
            <br />
            <br />
            <b>Environment:</b> React.js, Firebase, Ant Design, Netlify
          </Paragraph>
        </div>
        <div className={styles.projectCard} style={{ borderColor: "#FFCA58" }}>
          <div className={styles.projectHeading}>
            <h2>American Shipping International</h2>
            <div>
              <a href="https://asishipping.com/" target="_blank">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <Paragraph>
            ASI is an informational website for American Shipping International
            company. It is a custom WordPress theme built and designed from
            Scratch.
            <br />
            <br />
            <b>Environment:</b> WordPress, PHP, Bootstrap, CPanel
          </Paragraph>
        </div>
        <div className={styles.projectCard} style={{ borderColor: "#FD6FFF" }}>
          <div className={styles.projectHeading}>
            <h2>GKL Shipping</h2>
            <div>
              <a href="https://gklshipping.com/" target="_blank">
                <FiExternalLink />
              </a>
            </div>
          </div>
          <Paragraph>
            GKL Shipping is a custom WordPress template for a shipping company.
            It uses schedules and tracking APIs to fetch sailing schedules and
            cargo tracking information.
            <br />
            <br />
            <b>Environment:</b> WordPress, PHP, Bootstrap, CPanel.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
