"use client";
import React from "react";

import styles from "../page.module.css";
import { Carousel } from "antd";
import Button from "@mui/material/Button";

import newsBlog from "../Assets/TIMES-OF-INDIA.png.jpg";
import hireme from "../Assets/hire-me.png";
import ToDo from "../Assets/Create task list.jpeg";
import invoice from "../Assets/bill-banner.png";
import reserve from "../Assets/be-main.png";
import oauth from "../Assets/Login Page.jpeg";
import quiz from "../Assets/quiz.jpeg";
import ecommerce from "../Assets/e-commerce.jpeg";
import weather from "../Assets/Weather App.jpeg";


import Image from "next/image";
import Link from "next/link";

const divStyle = {
  margin: "0",
};

const Projects = () => {
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
      <div className={styles.main_comp} id="Projects">
        <div className={styles.about}>
          <h3>Projects</h3>
          <p
            style={{
              color: "var(--faded-color)",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            My Projects Work
          </p>
        </div>
        <div className={styles.crosel_div}>
          <Carousel autoplay dotPosition="right">
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>
                          Invoice Software(PC, Mobile)
                        </h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          ElectronJS, CapacitorJS, NodeJS, Express, Mongoose,
                          spdf, Indexeddb, path, ReactJS 18, sass, bootstrap,
                          Material-UI.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/electron-Bill.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={invoice}
                        alt="Invoice Crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>News Website</h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          Dummy news API, React 18,
                          react-infinite-scroll-component, react-router-dom,
                          react-top-loading-bar, react-toastify.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/News-Application.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={newsBlog}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>
                          Hotel Reservation App
                        </h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          NodeJS, ExpressJS, Mongoose, ReactJS, Redux,
                          MaterialUI, bycrpt, path, .
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/project_event_managment2.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={reserve}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>Gooogle OAuth</h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          NodeJS, ExpressJS, Mongoose, ReactJS, Redux, bycrpt,
                          multer, passport, passport-google-oauth20, fs, path,
                          jsonwebtoken, cookie-session.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/google_oauth.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={oauth}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>E-Commerce App</h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          ReactJS 18, NodeJS, ExpressJS, MongoDB,
                          react-router-dom, axios, multer, jsonwebtoken,
                          express-validator.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/E-commerce.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={ecommerce}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>To-Do List</h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          ReactJS, NodeJS, ExpressJS, MongoDB.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/inotebook.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={ToDo}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>Weather app</h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          Dummy Weather API, ReactJS.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/Weather-App.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={weather}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={divStyle}>
              <div className={styles.contentStyle}>
                <div className={styles.crouselItem}>
                  <div>
                    <div className={styles.crouselContext}>
                      <div className="crouselMainContent">
                        <h1 className={styles.crouselTitle}>Quiz App</h1>
                      </div>
                      <div className="crouselMainContent2">
                        <p className={styles.crousePara}>
                          ReactJS, Dummy quiz API, react-router-dom.
                        </p>
                      </div>
                      <div>
                        <Link
                          href="https://github.com/n07Laksh/Quiz_App.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            sx={{
                              mt: 1,
                              "@media only screen and (max-width:700px)": {
                                fontSize: "0.600rem",
                                padding: "2px 8px",
                              },
                            }}
                            variant="contained"
                            color="success"
                          >
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className={styles.crouselImg}>
                      <Image
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "6px",
                        }}
                        src={quiz}
                        alt="crousel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div
          className={styles.hire_me_cont}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={styles.hire_me}>
            <div className={styles.hire_img_container}>
              <div className={styles.hire_img}>
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={hireme}
                  alt="Hire Me"
                />
              </div>
            </div>
            <div className={styles.hire_img_context}>
              <div className={styles.hireHeading}>Want to Hire Me?</div>
              <div className={styles.hireParagraph}>
                If you're looking to hire or have a freelance project in mind,
                feel free to get in touch with me.
              </div>
              <div className={styles.hireBtn}>
                <Link
                  href="#Contact"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("Contact");
                  }}
                >
                  <Button
                    sx={{
                      mt: 3,
                      "@media only screen and (max-width:700px)": {
                        padding: "3px 10px",
                        fontSize: "0.775rem",
                      },
                    }}
                    variant="contained"
                    color="success"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
