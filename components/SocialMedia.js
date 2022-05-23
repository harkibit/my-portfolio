import React, { useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { Heading, TextInput, TextArea, Button } from "grommet";

import styles from "../styles/Home.module.css";

import twitter from "../public/images/Twitter.png";
import linkedin from "../public/images/Linkedin.png";
import outlook from "../public/images/Outlook.png";
import youtube from "../public/images/Youtube.png";
import zoom from "../public/images/Zoom.png";
import instagram from "../public/images/Instagram.png";
import discord from "../public/images/Discord.png";
import dribbble from "../public/images/Dribbble.png";
import slack from "../public/images/Slack.png";

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
        "service_pq7hpkb",
        "template_o0lgl0a",
        contactForm.current,
        "2Slm1HP7RJwCoPx-m"
      )
      .then(
        (result) => {
          setForm({ ...form, name: "", email: "", content: "" });
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
          <Heading>Let&apos;s Connect!</Heading>
          <form ref={contactForm} onSubmit={(e) => sendEmail(e)}>
            <TextInput
              placeholder="Enter your name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className={styles.input}
              name="from_name"
            />
            <TextInput
              placeholder="Enter your email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className={styles.input}
              name="from_email"
            />
            <TextArea
              placeholder="What you have in mind?"
              value={form.content}
              onChange={(event) =>
                setForm({ ...form, content: event.target.value })
              }
              className={styles.input}
              style={{ resize: "none" }}
              rows={6}
              name="message"
            />
            <button className={styles.btn} type="submit">
              Get in touch!
            </button>
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
