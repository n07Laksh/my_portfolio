"use client";

import * as React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import styles from "../page.module.css";
import Image1 from "../Assets/social-media.png";
import Image2 from "../Assets/degree.png";
import Image3 from "../Assets/front-end.png";
import Image4 from "../Assets/coding.png";
import Image5 from "../Assets/engineer.png";
import Image6 from "../Assets/app-development.png";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Qualification = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const headStyle = {
    fontWeight: "700",
    fontSize: "1rem",
    "@media screen and (max-width:700px)": {
      fontSize: ".8rem",
    },
  };

  const tagStyle = {
    fontWeight: "700",
    color: "var(--faded-color)",
    "@media screen and (max-width:700px)": {
      fontSize: ".7rem",
    },
  };

  const yearStyle = { color: "var(--faded-color)", fontSize: ".7rem" };
  return (
    <>
      <div className={styles.main_comp} id="Qualifications">
        <div className={styles.about}>
          <h3>Qualification</h3>
          <p
            style={{
              color: "var(--faded-color)",
              fontSize: "13px",
              marginTop: "5px",
            }}
          >
            My Qualifications
          </p>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
            >
              <Tab sx={{color:"inherit"}} icon={<SchoolIcon />} label="Education" />
              <Tab sx={{color:"inherit"}} icon={<WorkHistoryIcon />} label="Work" />
            </Tabs>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
                mb: 10,
                width: "100%",
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <Timeline
                  sx={{
                    padding: 0,
                  }}
                  position="alternate"
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot>
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image6}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Software Developement
                      </Typography>
                      <Typography sx={tagStyle}>Online</Typography>
                      <Typography sx={yearStyle}>2023 - Present</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="success">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image5}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Full Stack Developement
                      </Typography>
                      <Typography sx={tagStyle}>Online</Typography>
                      <Typography sx={yearStyle}>2022 - 2023</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="error">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image3}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        UX/UI Designer
                      </Typography>
                      <Typography sx={tagStyle}>Online</Typography>
                      <Typography sx={yearStyle}>2022 - 2023</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image4}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Frontend Developement
                      </Typography>
                      <Typography sx={tagStyle}>ISBM University</Typography>
                      <Typography sx={yearStyle}>2021 - 2022</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary" variant="outlined">
                        <SchoolIcon />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Post Graduate Diploma in Computer Application
                      </Typography>
                      <Typography sx={tagStyle}>ISBM University</Typography>
                      <Typography sx={yearStyle}>2021 - 2022</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      <TimelineDot color="secondary">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image2}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Bachelor of Science
                      </Typography>
                      <Typography sx={tagStyle}>ISBM University</Typography>
                      <Typography sx={yearStyle}>2019 - 2021</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      <TimelineDot color="info">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image1}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Digital Marketing
                      </Typography>
                      <Typography sx={tagStyle}>Google</Typography>
                      <Typography sx={yearStyle}>2019 - 2020</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image5}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Software Engineer
                      </Typography>
                      <Typography sx={tagStyle}>Tribe Web Solutions</Typography>
                      <Typography sx={yearStyle}>2023 - Present</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary" variant="outlined">
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image4}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        Full Stack Web Developer
                      </Typography>
                      <Typography sx={tagStyle}>Tribe Web Solutions</Typography>
                      <Typography sx={yearStyle}>2023 - Present</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      <TimelineDot>
                        <div className={styles.work_icon}>
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={Image3}
                            alt="grade"
                          />
                        </div>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography sx={headStyle} variant="h6" component="span">
                        UI/UX Designer
                      </Typography>
                      <Typography sx={tagStyle}>Tribe Web Solutions</Typography>
                      <Typography sx={yearStyle}>2023 - Present</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CustomTabPanel>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Qualification;
