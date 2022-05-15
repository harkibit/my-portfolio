import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { Heading, TextInput, TextArea, Button } from "grommet";
import twitter from "../public/images/twitter.png";
import linkedin from "../public/images/linkedin.png";
import outlook from "../public/images/outlook.png";
import youtube from "../public/images/youtube.png";
import zoom from "../public/images/zoom.png";
import instagram from "../public/images/instagram.png";
import discord from "../public/images/discord.png";
import dribbble from "../public/images/dribbble.png";
import slack from "../public/images/slack.png";

export default function SocialMedia() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    content: "",
  });

  return (
    <div className={styles.componentContainer} style={{ border: "none" }}>
      <div className={styles.randomFacts}>
        <div>
          <Heading>Let's Connect!</Heading>
          <div>
            <TextInput
              placeholder="Enter your name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className={styles.input}
            />
            <TextInput
              placeholder="Enter your email"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className={styles.input}
            />
            <TextArea
              placeholder="What you have in mind?"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, content: event.target.value })
              }
              className={styles.input}
              style={{ resize: "none" }}
              rows={6}
            />
            <Button primary label="Get in touch!" className={styles.btn} />
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <Image
            src={twitter}
            width={100}
            height={100}
            className={styles.twitter}
          />
          <Image
            src={linkedin}
            width={100}
            height={100}
            className={styles.linkedin}
          />
          <Image
            src={outlook}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            src={instagram}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            src={youtube}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            src={zoom}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            src={discord}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            src={slack}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            src={dribbble}
            width={100}
            height={100}
            className={styles.outlook}
          />
        </div>
      </div>
    </div>
  );
}
