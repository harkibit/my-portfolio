import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grommet, Paragraph, Button } from "grommet";

import styles from "../styles/Home.module.css";
import logo from "../public/images/logo.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          alt="site-logo"
          src={logo}
          width={"100px"}
          className={styles.logo}
          height={"100px"}
        />
      </Link>
      <section>
        <ul className={`${styles.ul} ${styles.flex}`}>
          <li>
            <Link href="/contact">
              <button className={styles.btn}>Get in touch!</button>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
