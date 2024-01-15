"use client";
import React, { useState } from "react";
import { Modal } from "antd";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";


import styles from "../page.module.css";
import fullStackDev from "../Assets/app-development.png";
import frontendDev from "../Assets/front-end-programming.png";
import backDev from "../Assets/development.png";
import uxui from "../Assets/user-experience.png";
import check from "../Assets/check-mark.png";
import Image from "next/image";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTxt, setModalTxt] = useState("");
  const [service, setService] = useState<string[]>([]);

  interface Service {
    full_stack: string[];
    frontend: string[];
    backend: string[];
    uxui: string[];
  }

  const serviceDetails: Service = {
    full_stack: [
      "Responsive Web Design",
      "Interactive User Interfaces",
      "SEO-Friendly Implementations",
      "Accessibility and UX Enhancement",
      "Database Management",
      "API Development",
      "Server-Side Rendering",
      "Authentication and Authorization",
      "Performance Optimization",
    ],
    frontend: [
      "Responsive Web Design",
      "Interactive User Interfaces",
      "SEO-Friendly Implementations",
      "Accessibility and UX Enhancement",
    ],
    backend: [
      "Database Management",
      "API Development",
      "Server-Side Rendering",
      "Authentication and Authorization",
      "Performance Optimization",
    ],
    uxui: [
      "Intuitive User Interface Design",
      "Responsive and Mobile-First Design",
      "Seamless User Experience Optimization",
      "Accessibility and Usability Enhancements",
    ],
  };

  const showModal = (servTxt: keyof Service, modalTxt: string) => {
    const selectService = serviceDetails[servTxt];
    setService(selectService);
    setModalTxt(modalTxt);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setService([]);
    setModalTxt("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setService([]);
    setModalTxt("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={modalTxt ? modalTxt : ""}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{marginTop:"10px"}}>
          {service &&
            service.map((item, index) => (
              <div key={index} className={styles.service_list}>
                <div className={styles.check_div}><Image style={{width:"100%",height:"auto"}} src={check} alt="check"/></div>
                <div>{item}</div>
              </div>
            ))}
            </div>
      </Modal>

      <div className={styles.main_comp} id="Services">
        <div className={styles.about}>
          <h3>Services</h3>
          <p
            style={{
              color: "var(--faded-color)",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            What I Offer
          </p>
        </div>

        <Stack
          sx={{
            display: "flex",
            margin: "30px 0",
            justifyContent: "center",
            flexDirection: "row",
            gap: "16px",
            "@media screen and (max-width:700px)": {
              flexDirection: "column",
            },
          }}
        >
          <Card className={styles.card} sx={{ minWidth: 220 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "50px",
                  my: 3,
                }}
              >
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={fullStackDev}
                  alt="Full Stack"
                ></Image>
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginTop: "40px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                Full Stack Web Development
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() =>
                  showModal("full_stack", "Full Stack Web Development")
                }
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className={styles.card} sx={{ minWidth: 220 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "50px",
                  my: 3,
                }}
              >
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={frontendDev}
                  alt="Front-End Dev"
                ></Image>
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginTop: "40px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                Frontend Development
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => showModal("frontend", "Frontend Development")}
              >
                {" "}
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className={styles.card} sx={{ minWidth: 220 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "50px",
                  my: 3,
                }}
              >
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={backDev}
                  alt="Back-End Dev"
                ></Image>
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginTop: "40px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                Backend Development
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => showModal("backend", "Backend Development")}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className={styles.card} sx={{ minWidth: 220 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  width: "50px",
                  my: 3,
                }}
              >
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={uxui}
                  alt="UX/UI Dev"
                ></Image>
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  marginTop: "40px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                UX/UI
                <br /> Design
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => showModal("uxui", "UX/UI Design")}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </div>
    </>
  );
};

export default Services;
