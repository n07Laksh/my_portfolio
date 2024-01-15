"use client";
import styles from "../page.module.css";

import * as React from "react";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import myImg from "../Assets/myImg.gif";
import Image from "next/image";
import Link from "next/link";

function Main() {
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
      <div className={styles.main_comp} id="Home">
        <div className={styles.main_home}>
          <div>
            <h3 className={styles.my_name}>Hi, I am Laxmi Lal</h3>
            <h4 className={styles.my_job}>Full Stack Web Developer</h4>
            <p className={styles.my_job_desc}>
              Driven Full Stack Web Developer with a fervor for crafting
              pixel-perfect web designs. Specialized in creating seamless and
              visually stunning web experiences.
            </p>

            <Link
              href="#Contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("Contact");
              }}
            >
              <Button
                sx={{
                  margin: "20px 0",
                }}
                component="label"
                variant="contained"
                startIcon={<EmailIcon />}
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className={styles.main_home_sec}>
            <div className={styles.my_img}>
              <Image className={styles.img} src={myImg} alt="My Image" />
            </div>
            <div className={styles.social}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
