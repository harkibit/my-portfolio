import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { Heading, TextInput, TextArea, Button } from "grommet";

import styles from "../styles/Home.module.css";

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

  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        contactForm.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.componentContainer} style={{ border: "none" }}>
      <div className={styles.randomFacts}>
        <div>
          <Heading>Let's Connect!</Heading>
          <form ref={contactForm} onSubmit={sendEmail}>
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
            <Button
              primary
              label="Get in touch!"
              className={styles.btn}
              type="submit"
            />
          </form>
        </div>
        <div className={styles.socialMediaContainer}>
          <Image
            alt="twitter"
            src={twitter}
            width={100}
            height={100}
            className={styles.twitter}
          />
          <Image
            alt="Linkedin"
            src={linkedin}
            width={100}
            height={100}
            className={styles.linkedin}
          />
          <Image
            alt="outlook"
            src={outlook}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            alt="Instagram"
            src={instagram}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            alt="Youtube"
            src={youtube}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            alt="Zoom"
            src={zoom}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            alt="Discord"
            src={discord}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            alt="Slack"
            src={slack}
            width={100}
            height={100}
            className={styles.outlook}
          />
          <Image
            alt="Dribbble"
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
