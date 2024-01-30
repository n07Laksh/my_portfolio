"use client"
import React from "react";
import styles from "../page.module.css";
import vect from "../Assets/vect2.png";
import Image from "next/image";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  const handleDownload = () => {
    const resumePath = "myResume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "laxmilal_resume.pdf";
    link.click();
  };
  return (
    <>
      <div className={styles.main_comp} id="About">
        <div className={styles.about}>
          <h3>About</h3>
          <p
            style={{
              color: "var(--faded-color)",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            About Me
          </p>
        </div>
        <div className={styles.about_det}>
          <div>
            <Image
              style={{ height: "auto" }}
              src={vect}
              alt="programming vector image"
              className={styles.vect_img}
            />
          </div>
          <div className={styles.para_div}>
            <p className={styles.intro_para}>
              As a skilled Full Stack Developer proficient in the MERN (MongoDB,
              Express.js, React.js, Node.js) stack, I specialize in architecting
              robust web applications. With a solid foundation in HTML, CSS, and
              JavaScript, I excel in crafting captivating user interfaces that
              seamlessly blend aesthetics with functionality. My expertise in
              responsive design and UI/UX principles ensures each project I
              undertake becomes an engaging and intuitive digital experience.
            </p>
            <div className={styles.progress}>
              <div>
                <h3>02+</h3>
                <p>Year</p>
                <p>experience</p>
              </div>
              <div>
                <h3>20+</h3>
                <p>Project </p>
                <p>completed</p>
              </div>
              <div>
                <h3>01+</h3>
                <p>Companies</p>
                <p>worked</p>
              </div>
            </div>
            <div className={styles.download_btn}>
              <Button
                sx={{
                  margin: "20px 0",
                }}
                component="label"
                variant="contained"
                endIcon={<DownloadIcon />}
                onClick={handleDownload}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
