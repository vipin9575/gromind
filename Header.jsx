import { Helmet } from "react-helmet-async";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Link as MuiLink,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  Close,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    "Home",
    "About Us",
    "Courses",
    "Blogs",
    "Events",
    "Contact Us",
  ];

  // Map routes to dynamic page titles
  const pageMeta = {
    "/": {
      title: "Home - groMind Academy",
      description:
        "Welcome to groMind Academy! Explore our popular courses, upcoming events, and success stories from our students.",
    },
    "/about-us": {
      title: "About Us - groMind Academy",
      description:
        "Learn more about groMind Academy's mission, vision, and values. We are committed to helping you succeed!",
    },
    "/courses": {
      title: "Courses - groMind Academy",
      description:
        "Browse our extensive collection of online courses designed to help you succeed in your career.",
    },
    "/blogs": {
      title: "Blogs - groMind Academy",
      description:
        "Read insightful articles and stay updated with the latest trends in education and career development.",
    },
    "/events": {
      title: "Events - groMind Academy",
      description:
        "Join exciting events and workshops at groMind Academy to enhance your learning experience.",
    },
    "/contact-us": {
      title: "Contact Us - groMind Academy",
      description:
        "Get in touch with us for any queries or support. We are here to help you succeed.",
    },
  };

  // Default Title & Description if route is not in the mapping
  const { title, description } = pageMeta[location.pathname] || {
    title: "groMind Academy - Empowering Your Future",
    description:
      "Explore our courses, events, and resources to accelerate your learning journey.",
  };

  return (
    <>
      {/* Dynamic Helmet for Title & Meta Tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Box>
        <Box
          sx={{
            margin: "0 100px",
            "@media (max-width: 600px)": {
              margin: "0 20px",
            },
          }}
        >
          {/* Top Bar (Subheader) */}
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#632B90",
              height: "60px",
              zIndex: 1200,
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", sm: "space-between" },
                alignItems: "center",
                height: "100%",
                padding: "0 20px",
                flexWrap: { xs: "wrap", sm: "nowrap" },

                "@media (max-width: 600px)": {
                  padding: "0 10px", // Adjust for small screens
                },
              }}
            >
              {/* Contact Info */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: { xs: 4, sm: 8 },
                  rowGap: { xs: 1, sm: 0 },
                  color: "#fff",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  columnGap={{ xs: 0.2, sm: 1 }}
                >
                  <Phone sx={{ fontSize: { xs: "small", sm: "medium" } }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    <MuiLink
                      href="tel:+919266464133"
                      color="inherit"
                      underline="hover"
                    >
                      +91-9266 464 133
                    </MuiLink>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  columnGap={{ xs: 0.2, sm: 1 }}
                >
                  <Email sx={{ fontSize: { xs: "small", sm: "medium" } }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    }}
                  >
                    <MuiLink
                      href="mailto:hr@gromindacademy.com"
                      color="inherit"
                      underline="hover"
                    >
                      hr@gromindacademy.com
                    </MuiLink>
                  </Typography>
                </Box>
              </Box>

              {/* Social Links */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: "15px",
                  color: "#fff",
                }}
              >
                <MuiLink
                  target="_blank"
                  href="https://www.twitter.com"
                  color="inherit"
                  aria-label="Twitter"
                >
                  <Twitter
                    sx={{
                      fontSize: { xs: "small", sm: "medium", md: "large" },
                    }}
                  />
                </MuiLink>
                <MuiLink
                  target="_blank"
                  href="https://www.instagram.com"
                  color="inherit"
                  aria-label="Instagram"
                >
                  <Instagram
                    sx={{
                      fontSize: { xs: "small", sm: "medium", md: "large" },
                    }}
                  />
                </MuiLink>
                <MuiLink
                  target="_blank"
                  href="https://www.facebook.com"
                  color="inherit"
                  aria-label="Facebook"
                >
                  <Facebook
                    sx={{
                      fontSize: { xs: "small", sm: "medium", md: "large" },
                    }}
                  />
                </MuiLink>
                {/* <Button color="inherit" size="small">
                Login
              </Button>
              <Button color="inherit" size="small">
                Sign Up
              </Button> */}
              </Box>
            </Toolbar>
          </AppBar>

          {/* Navigation Bar (Main Header) */}
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "#fff",
              top: "60px",
              height: "100px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              zIndex: 1100,
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                padding: "0 20px",
              }}
            >
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logo}
                  alt="groMind Academy"
                  style={{ height: "60px" }}
                />
              </Box>

              {/* Navigation Items */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "20px",
                }}
              >
                {navItems.map((item, index) => {
                  const path = `/${item.replace(/\s+/g, "-").toLowerCase()}`;
                  const isActive =
                    location.pathname === path ||
                    (item === "Home" && location.pathname === "/") ||
                    (item === "Courses" &&
                      location.pathname.includes("/courses")) ||
                    (item === "Events" &&
                      location.pathname.includes("/events"));

                  return (
                    <NavLink
                      key={index}
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.replace(/\s+/g, "-").toLowerCase()}`
                      }
                      style={{
                        textDecoration: "none",
                        borderRadius: "30px",
                        border: isActive ? "none" : "1px solid #373737",
                        color: isActive ? "#fff" : "#373737",
                        backgroundColor: isActive
                          ? "var(--main-blue-color)"
                          : "transparent",
                        textTransform: "capitalize",
                        padding: "10px 20px",
                      }}
                    >
                      <Typography fontWeight={600}>{item}</Typography>
                    </NavLink>
                  );
                })}
              </Box>

              {/* Hamburger Menu for Mobile */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Drawer for Mobile Navigation */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                width: "250px",
              },
            }}
          >
            <List sx={{ marginTop: "36px" }}>
              {navItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.replace(/\s+/g, "-").toLowerCase()}`
                    }
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#632B90" : "inherit",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemButton>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                color: "#632B90",
                "&:hover": {
                  color: "red",
                },
              }}
              onClick={handleDrawerToggle}
            >
              <Close />
            </Box>
          </Drawer>

          {/* Spacer for fixed header */}
          <Box sx={{ marginTop: "160px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Header;
