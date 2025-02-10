import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import footerLogo from "../../images/footerlogo.png";
import { useNavigate } from "react-router-dom";

const sectionLinks = [
  {
    title: "Section 1",
    links: ["About Us", "Contact"],
  },
  {
    title: "Section 2",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    if (link === "About Us") navigate("/about-us");
    else if (link === "Contact") navigate("/contact-us");
    else if (link === "Privacy Policy") navigate("/privacy-policy");
    else if (link === "Terms of Service") navigate("/terms-of-service");
  };
  return (
    <Box bgcolor="var(--primary-color)" pt={4} mt="auto">
      <Container>
        <Grid container spacing={{ xs: 4, md: 0 }}>
          <Grid
            size={{ xs: 12, md: 5 }}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
            gap={4}
            px={{ xs: 0, md: 7 }}
          >
            <img src={footerLogo} alt="footerLogo" width={256} height={116} />
            <Typography
              fontSize={14}
              color="customGray.main"
              pr={{ xs: 0, md: 7 }}
              px={{ xs: 7, md: 0 }}
              lineHeight={1.5}
              letterSpacing={1}
            >
              Welcome to groMind Academy, your gateway to a successful career.
              We are a passionate team of HR and Technology professionals
            </Typography>
          </Grid>
          {sectionLinks.map((section, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, md: index === 0 ? 4 : 3 }}
              md={index === 0 ? 4 : 3}
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={2}
              textAlign={{ xs: "center", md: "left" }}
              px={{ xs: 0, md: 7 }}
            >
              {section.links.map((link, linkIndex) => (
                <Typography
                  key={linkIndex}
                  fontSize={14}
                  lineHeight={1.5}
                  letterSpacing={1}
                  color="customGray.main"
                  onClick={() => handleLinkClick(link)}
                  sx={{ cursor: "pointer" }}
                >
                  {link}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography color="customGray.main" textAlign="center" mt={4}>
        © 2024 GroMind Digital Academy.
      </Typography>
    </Box>
  );
};

export default Footer;
