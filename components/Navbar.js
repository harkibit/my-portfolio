import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grommet, Paragraph, Button } from "grommet";

import styles from "../styles/Home.module.css";
import logo from "../public/images/logo1.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src={logo}
          width={"100px"}
          className={styles.logo}
          height={"100px"}
        />
      </Link>
      <section>
        <ul className={`${styles.ul} ${styles.flex}`}>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button
                primary
                label="Let's get in touch!"
                className={styles.btn}
              />
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
