import React from "react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialmedia}>
        <li>
          <a
            href="https://www.linkedin.com/in/hiba-abdel-karim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/abdelkarim_hiba"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>

        <li>
          <a
            href="https://github.com/harkibit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>

        <li>
          <a
            href="https://stackoverflow.com/users/15598509/hiba-abdel-karim"
            target="_blank"
            rel="noopener noreferrer"
          >
            StackOverflow
          </a>
        </li>
      </ul>
    </footer>
  );
}
