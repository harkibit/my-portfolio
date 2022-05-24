import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Grommet, Paragraph, Button } from "grommet";

import illustration from "../public/images/coding_illustration.svg";
import PieChart from "../components/PieChart";
import Portfolio from "../components/Portfolio";
import RandomFacts from "../components/RandomFacts";
import SkillsChart from "../components/SkillsChart";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <Grommet plain>
      <div className={styles.container}>
        <Head>
          <title>Hiba Abdel Kairm - Portfolio</title>
          <meta name="description" content="Hiba Abdel Karim's portfolio" />
          <link rel="icon" href="/static/favicon.svg" sizes="57x57" />
        </Head>

        <main className={styles.main}>
          <section className={styles.headerSection}>
            <div>
              <h1 className={styles.title}>Welcome to Hiba&apos;s portfolio</h1>
              <Paragraph className={styles.description}>
                Front End Web Developer, Passionate about UI/UX, Learning
                Backend Developement
              </Paragraph>
              <section className={styles.flex}>
                <Link href="/contact">
                  <a>
                    <button className={styles.btn}>
                      Let&apos;s get in touch!
                    </button>
                  </a>
                </Link>
                {/* <Link href="/about">
                  <a className={styles.link}>More about me</a>
                </Link> */}
              </section>
            </div>

            <Image
              src={illustration}
              alt="coding girl illustration"
              className={styles.headerImage}
              width={700}
              height={700}
            />
          </section>

          <PieChart />

          <Portfolio />

          <RandomFacts />

          {/* <SkillsChart /> */}

          <SocialMedia />
        </main>
      </div>
    </Grommet>
  );
}
