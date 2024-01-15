"use client";
import React from "react";
import styles from "../page.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer = () => {
  const smoothScroll = (target: any) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      <div className={styles.footer_main}>
        <div className={styles.footer_main_comp}>
          <div className={styles.footer_intro}>
            <div>
              <div className={styles.footer_intro_heading}>Laxmi Lal</div>
              <div className={styles.footer_intro_pos}>
                Full Stack Web Developer
              </div>
            </div>
            <div>
              <ul className={styles.footer_intro_ul}>
                <li>
                  <Link
                    className={styles.footer_links}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll("Services");
                    }}
                    href="#Services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.footer_links}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll("Projects");
                    }}
                    href="#Projects"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.footer_links}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll("Contact");
                    }}
                    href="#Contact"
                  >
                    Contact
                  </Link>
                </li>
                <Link
                  style={{ color: "inherit" }}
                  href="https://www.linkedin.com/in/laxmi-lal-614707163/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  style={{ color: "inherit" }}
                  href="https://www.instagram.com/n.0laksh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  style={{ color: "inherit" }}
                  href="https://github.com/n07Laksh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footer_author}>
          <p>Created By - Laxmi Lal</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
