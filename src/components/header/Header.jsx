import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
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
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = ["Home", "About Us", "Courses", "Blog", "Contact Us"];

  return (
    <Box>
      <Box
        sx={{
          margin: "0 100px",
          "@media (max-width: 600px)": {
            margin: "0 20px", // Adjust for small screens
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
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            {/* Contact Info */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#fff",
                fontSize: "14px",
                flexWrap: "wrap",
              }}
            >
              <Phone fontSize="small" />
              <Typography variant="body2">+91-9266 464 133</Typography>
              <Email fontSize="small" />
              <Typography variant="body2">HR@groMindacademy.com</Typography>
            </Box>

            {/* Social Links */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                color: "#fff",
                mt: { xs: "10px", sm: "0" },
              }}
            >
              <MuiLink href="#" color="inherit" aria-label="Twitter">
                <Twitter fontSize="small" />
              </MuiLink>
              <MuiLink href="#" color="inherit" aria-label="Instagram">
                <Instagram fontSize="small" />
              </MuiLink>
              <MuiLink href="#" color="inherit" aria-label="Facebook">
                <Facebook fontSize="small" />
              </MuiLink>
              <Button color="inherit" size="small">
                Login
              </Button>
              <Button color="inherit" size="small">
                Sign Up
              </Button>
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
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    borderRadius: "30px",
                    border: isActive ? "none" : "1px solid #373737",
                    color: isActive ? "#fff" : "#373737",
                    backgroundColor: isActive
                      ? "var(--main-blue-color)"
                      : "transparent",
                    textTransform: "capitalize",
                    padding: "10px 20px",
                  })}
                >
                  <Typography fontWeight={600}>{item}</Typography>
                </NavLink>
              ))}
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
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <NavLink
                  to={`/${item.replace(/\s+/g, "-").toLowerCase()}`}
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
        </Drawer>

        {/* Spacer for fixed header */}
        <Box sx={{ marginTop: "160px" }} />
      </Box>
    </Box>
  );
};

export default Header;
