"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  "Home",
  "About",
  "Skills",
  "Qualifications",
  "Services",
  "Projects",
  "Contact",
];

import { useEffect } from "react";
import Image from "next/image";
import Sun from "../Assets/sun.png";
import Moon from "../Assets/moon.png";
import Link from "next/link";

function Navbar() {
  const [thmeMode, setThemeMode] = React.useState<null | String>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const selectedMode = localStorage.getItem("mode");

    if (selectedMode === "light") {
      root.classList.add("dark-mode");
      root.style.setProperty("--background-color", "#000000");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--faded-color", "#FFFFFF90");
      root.style.setProperty(
        "--box-shadow-color",
        "0px 2px 1px -1px rgba(255, 255, 255, 0.2),0px 1px 1px 0px rgba(255, 255, 255, 0.4),0px 1px 3px 0px rgba(206, 194, 194, 0.7)"
      );

      localStorage.setItem("mode", "dark");
      setThemeMode("dark");
    } else if (selectedMode === "dark") {
      root.classList.remove("dark-mode");
      root.style.setProperty("--background-color", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--faded-color", "rgba(0,0,0,0.6)");
      root.style.setProperty(
        "--box-shadow-color",
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
      );

      localStorage.setItem("mode", "light");
      setThemeMode("light");
    }
  };

  // Apply mode preference on page load
  const applyModePreference = () => {
    const root = document.documentElement;
    const selectedMode = localStorage.getItem("mode");

    if (!selectedMode) {
      localStorage.setItem("mode", "light");
    }
    setThemeMode(selectedMode);

    if (selectedMode === "dark") {
      root.classList.add("dark-mode");
      root.style.setProperty("--background-color", "#000000");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--faded-color", "#FFFFFF90");
      root.style.setProperty(
        "--box-shadow-color",
        "0px 2px 1px -1px rgba(255, 255, 255, 0.2),0px 1px 1px 0px rgba(255, 255, 255, 0.4),0px 1px 3px 0px rgba(206, 194, 194, 0.7)"
      );
    }
  };

  useEffect(() => {
    applyModePreference();
  }, []);

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
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        background: "var(--background-color)",
        color: "var(--text-color)",
        transition: "background-color 0.5s, color 0.5s",
        boxShadow:
          "0px 2px 4px -1px rgba(0, 0, 0, 0),0px 4px 5px 0px rgba(0, 0, 0, 0.07),0px 1px 10px 0px rgba(0, 0, 0, 0)",
        "@media screen and (max-width: 768px)": {
          top: "auto",
          bottom: 0,
        },
      }}
      position="static"
    >
      <Container
        maxWidth="xl"
        sx={{
          "@media screen and (min-width: 768px)": {
            padding: "0 120px",
          },
          padding: "0 10px",
        }}
      >
        <Toolbar
          sx={{
            "@media screen and (max-width: 768px)": {
              flexDirection: "row-reverse",
            },
          }}
          disableGutters
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <div
              style={{
                margin: "16px 0",
                color: "inherit",
                display: "block",
                fontWeight: 500,
                fontSize: "0.875rem",
                cursor: "pointer",
                width: "20px",
              }}
              onClick={toggleDarkMode}
            >
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={thmeMode === "dark" ? Sun : Moon}
                alt={thmeMode === "dark" ? "Light Mode" : "Dark Mode"}
              />
            </div>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(page);
                  }}
                  href={`#${page}`}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ fontSize: "14px" }} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "unset",
              fontWeight: 700,
              letterSpacing: "0px",
              color: "inherit",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Laxmi Lal
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2 style={{ fontWeight: 900 }}>Laxmi Lal</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {pages.map((page, index) => (
                <Link
                  key={index}
                  href={`#${page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(page);
                  }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "inherit",
                      display: "block",
                      fontSize: "12px",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
              <div
                style={{
                  margin: "16px 0",
                  color: "inherit",
                  display: "block",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  letterSpacing: "0.02857em",
                  padding: "6px 8px",
                  cursor: "pointer",
                  width: "20px",
                }}
                onClick={toggleDarkMode}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={thmeMode === "dark" ? Sun : Moon}
                  alt={thmeMode === "dark" ? "Light Mode" : "Dark Mode"}
                />
              </div>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
