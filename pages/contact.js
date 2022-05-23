import React, { useRef, useState } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import emailjs from "@emailjs/browser";
import { Heading, TextInput, TextArea, Button } from "grommet";
import illustration from "../public/images/contact.svg";

import { Grommet } from "grommet";

export default function contact() {
  const [form, setForm] = useState({
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
    <div className={styles.container}>
      <div className={styles.randomFacts}>
        <div>
          <h1 className={styles.contactTitle}>Let&apos;s Talk!</h1>
          <p className={styles.contactContent}>
            We can talk about anything! Mostly I will be interested in working
            on frontend projects using React.js or Next.js and backend projects
            using Node.js or Express.js. If you&apos;d like us to work on these
            projects together, please get in touch!
          </p>

          <form ref={contactForm} onSubmit={(e) => sendEmail(e)}>
            <>
              <TextInput
                placeholder="Enter your name"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                className={styles.input}
                name="from_name"
              />
            </>

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
              Send Message
            </button>
          </form>
        </div>
        <Image src={illustration} alt="Contact us" width={300} height={300} />
      </div>
    </div>
  );
}
