import React from "react";
import styles from "../page.module.css";

import Link from "next/link";
import Image from "next/image";
import email from "../Assets/email.jpeg";
import whapp from "../Assets/whatsapp.jpeg";
import IG from "../Assets/insta.jpeg";
import Lnkd from "../Assets/lnkd.jpeg";

const Contact = () => {
  return (
    <>
      <div className={styles.main_comp} id="Contact">
        <div className={styles.about}>
          <h3>Contact Me</h3>
          <p
            style={{
              color: "var(--faded-color)",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            Get In Touch
          </p>
        </div>
        <div className={styles.contact_main}>
          <div>
            <Link
              className={styles.contact_card}
              href="mailto:lln7477055461@gmail.com"
            >
              <div className={styles.shareImages}>
                <Image
                  style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                  src={email}
                  alt="Visit Instagram"
                />
              </div>
              <div className={styles.overlay_div}>Mail</div>
            </Link>
          </div>
          <div>
            <Link
              className={styles.contact_card}
              href="https://api.whatsapp.com/send?phone=7477055461&text=Hello%20there,%20I%20would%20like%20to%20connect."
              target="_blank"
            >
              <div className={styles.shareImages}>
                <Image
                  style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                  src={whapp}
                  alt="Visit Instagram"
                />
              </div>
              <div className={styles.overlay_div}>Whatsapp</div>
            </Link>
          </div>
          <div>
            <Link
              className={styles.contact_card}
              href="https://www.instagram.com/n.0laksh/"
              target="_blank"
            >
              <div className={styles.shareImages}>
                <Image
                  style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                  src={IG}
                  alt="Visit Instagram"
                />
              </div>
              <div className={styles.overlay_div}>Instagram</div>
            </Link>
          </div>
          <div>
            <Link
              className={styles.contact_card}
              href="https://www.linkedin.com/in/laxmi-lal-614707163/"
              target="_blank"
            >
              <div className={styles.shareImages}>
                <Image
                  style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                  src={Lnkd}
                  alt="Visit Instagram"
                />
              </div>
              <div className={styles.overlay_div}>Linkedln</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
