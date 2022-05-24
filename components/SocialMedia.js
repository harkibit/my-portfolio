import React, { useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { Heading, TextInput, TextArea, Button } from "grommet";

import styles from "../styles/Home.module.css";
import socialMedia from "../public/images/socialMedia.png";

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
          <Image alt="twitter" src={socialMedia} />
        </div>
      </div>
    </div>
  );
}
