"use client";
import styles from "../page.module.css";

import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Skills = () => {
  const mySkills = [
    { lable: "Node JS", colour: "primary", variant: "outlined" },
    { lable: "Express JS", colour: "success", variant: "outlined" },
    { lable: "React JS", colour: "error", variant: "outlined" },
    { lable: "MongoDB", colour: "success", variant: "outlined" },
    { lable: "JavaScript", colour: "info", variant: "outlined" },
    { lable: "TypeScript", colour: "warning", variant: "outlined" },
    { lable: "Next JS", colour: "info", variant: "outlined" },
    { lable: "Boostrap", colour: "error", variant: "outlined" },
    { lable: "HTML", colour: "success", variant: "outlined" },
    { lable: "CSS", colour: "primary", variant: "outlined" },
    { lable: "Git", colour: "error", variant: "outlined" },
    { lable: "GitHub", colour: "info", variant: "outlined" },
    { lable: "Docker", colour: "warning", variant: "outlined" },
    { lable: "SASS", colour: "success", variant: "outlined" },
  ];

  const getColor = (colorString: any) => {
    switch (colorString) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "success":
        return "success";
      case "error":
        return "error";
      case "info":
        return "info";
      case "warning":
        return "warning";
      // Add other mappings if needed
      default:
        return "default";
    }
  };

  return (
    <>
      <div className={styles.main_comp} id="Skills">
        <div className={styles.about}>
          <h3>Skills</h3>
          <p
            style={{
              color: "var(--faded-color)",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            What I know
          </p>
        </div>

        <div style={{marginTop:"30px"}}>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              "@media screen and (max-width: 768px)":{
                gap:"5px",
              }
            }}
          >
            {mySkills.map((item, index) => (
              <Chip
                key={index}
                label={item.lable}
                color={getColor(item.colour)}
                variant="outlined"
                className={styles.chip}
              />
            ))}
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Skills;
