import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { Heading, TextInput, TextArea, Paragraph } from "grommet";
import twitter from "../public/images/twitter.png";
import linkedin from "../public/images/linkedin.png";
import outlook from "../public/images/outlook.png";

export default function SocialMedia() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    content: "",
  });

  return (
    <div className={styles.componentContainer}>
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
              style={{ resize: "vertical" }}
              rows={4}
            />
          </div>
        </div>
        <div className={styles.relative}>
          <Image src={twitter} width={100} height={100} />
          <Image src={linkedin} width={100} height={100} />
          <Image src={outlook} width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
