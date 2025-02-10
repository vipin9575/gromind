import "./AboutUs.css";
import aboutusImg from "../../images/aboutusImg.png"; // Update this with the correct path to your image
import aboutUs from "../../images/aboutUsImg1.png";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const AboutUs = ({ isFullPage }) => {
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState("company");

  return (
    <Box my={4}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack
              textAlign="left"
              direction="row"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  fontSize={{ xs: 24, sm: 32, md: 40 }}
                  fontWeight={600}
                  color="var(--primary-color)"
                >
                  About Us
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16, md: 20 }}
                  fontWeight={400}
                  color="var(--secondary-color)"
                >
                  Empower Your Transition: Bridging Skills for Corporate Success
                </Typography>
                <Divider
                  sx={{
                    width: { md: 145, sm: 100, xs: 50 },
                    height: 4,
                    bgcolor: "var(--secondary-color)",
                    mx: 0,
                    mt: 4,
                  }}
                />
              </Box>
              <Tooltip title="Chat on WhatsApp" placement="left-start" arrow>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Link
                    href="https://wa.me/919266464133/?text=Hello%20groMind%20Academy"
                    aria-label="Chat on WhatsApp"
                    alignSelf={{ xs: "end", md: "center" }}
                    sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}
                  >
                    <WhatsAppIcon
                      sx={{ fontSize: 30, fill: "var(--main-green-color)" }}
                    />
                  </Link>
                </motion.div>
              </Tooltip>
            </Stack>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              lineHeight={1.5}
              color="var(--secondary-color)"
              sx={{ mb: 2, mt: 1 }}
              letterSpacing={1}
            >
              Welcome to groMind Academy, your gateway to a successful career.
              We are a passionate team of HR and Technology professionals,
              united by over 15 years of global experience and our mission to
              empower students and professionals with the essential tools and
              knowledge needed to thrive in today’s fast-paced job market.
            </Typography>
            {isFullPage ? (
              <>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  lineHeight={1.5}
                  color="var(--secondary-color)"
                  sx={{ mb: 2, mt: 1 }}
                  letterSpacing={1}
                >
                  We recognize that many people face significant hurdles in
                  securing meaningful career opportunities. Limited resources,
                  insufficient placement support, and a lack of
                  industry-relevant skills often hinder their transitions into
                  the workforce. Compounding this challenge, the job market is
                  experiencing acute shortages, making it crucial for emerging
                  talent to be well-prepared.
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  lineHeight={1.5}
                  color="var(--secondary-color)"
                  sx={{ mb: 2, mt: 1 }}
                  letterSpacing={1}
                >
                  Our commitment is to bridge these gaps by providing
                  comprehensive training, personalized support, and access to
                  valuable resources. We believe that with the right guidance,
                  everyone can unlock their potential and succeed in their
                  chosen careers.
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  lineHeight={1.5}
                  color="var(--secondary-color)"
                  sx={{ mb: 2, mt: 1 }}
                  letterSpacing={1}
                >
                  Join us on this journey to shape the future of work—together,
                  we can create pathways to success.
                </Typography>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "var( --main-blue-color)",
                  px: 4,
                  boxShadow: "none",
                }}
                onClick={() => navigate("/about-us")}
              >
                Read More
              </Button>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <img
              src={!isFullPage ? aboutusImg : aboutUs}
              alt="feedbackImg"
              width="100%"
            />
          </Grid>
        </Grid>
        {isFullPage && (
          <Box
            my={2}
            p={4}
            bgcolor="var(--primary-color)"
            borderRadius={4}
            sx={{ color: "var(--main-white-color)" }}
          >
            <Stack direction="row" gap={4} flexWrap="wrap">
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                lineHeight={1.5}
                letterSpacing={1}
                onClick={() => setActiveContent("company")}
                sx={{
                  cursor: "pointer",
                  borderRadius: activeContent === "company" ? 10 : 0,
                  bgcolor:
                    activeContent === "company"
                      ? "var(--main-white-color)"
                      : "none",
                  color:
                    activeContent === "company"
                      ? "var(--primary-color)"
                      : "white",
                  py: 1.5,
                  px: 3,
                }}
              >
                For Companies
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                lineHeight={1.5}
                letterSpacing={1}
                onClick={() => setActiveContent("candidate")}
                sx={{
                  cursor: "pointer",
                  borderRadius: activeContent === "candidate" ? 10 : 0,
                  bgcolor:
                    activeContent === "candidate"
                      ? "var(--main-white-color)"
                      : "none",
                  color:
                    activeContent === "candidate"
                      ? "var(--primary-color)"
                      : "white",
                  py: 1.5,
                  px: 3,
                }}
              >
                For Candidates
              </Typography>
            </Stack>
            <Box mt={4}>
              {activeContent === "company" && (
                <>
                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={400}
                    lineHeight={1.5}
                    letterSpacing={1}
                    sx={{ mb: 2, mt: 1 }}
                  >
                    At groMind Academy, we offer companies exclusive access to a
                    pool of highly trained talent from premier institutes. Our
                    expertise lies in transforming these individuals into
                    world-class professionals, seamlessly integrating them into
                    organizations as full-time, distributed team members.
                  </Typography>
                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={400}
                    lineHeight={1.5}
                    letterSpacing={1}
                    sx={{ mb: 2, mt: 1 }}
                  >
                    We empower innovative start-ups and established tech giants
                    to tap into the vast, untapped talent pool across India,
                    significantly reducing the time spent on interviewing,
                    onboarding, and training new hires.
                  </Typography>
                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={400}
                    lineHeight={1.5}
                    letterSpacing={1}
                    sx={{ mb: 2, mt: 1 }}
                  >
                    We position ourselves not only as a talent provider but as a
                    strategic partner for companies. With our support,
                    organizations can fulfill both their immediate hiring
                    requirements and their long-term talent strategies, ensuring
                    they remain at the forefront of their industries.
                  </Typography>
                </>
              )}
              {activeContent === "candidate" && (
                <>
                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={400}
                    lineHeight={1.5}
                    letterSpacing={1}
                    sx={{ mb: 2, mt: 1 }}
                  >
                    We empower aspiring students and professionals by focusing
                    on a robust foundation of technical and behavioral skills,
                    complemented by real-time mentoring and hands-on training.
                  </Typography>
                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={400}
                    lineHeight={1.5}
                    letterSpacing={1}
                    sx={{ mb: 2, mt: 1 }}
                  >
                    At groMind Academy, we believe in personalized learning.
                    Every participant is paired with an experienced mentor who
                    provides tailored support throughout their journey. This
                    mentorship not only enhances learning but ensures that each
                    individual is equipped to be job-ready from day one.
                  </Typography>
                  <Typography
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={400}
                    lineHeight={1.5}
                    letterSpacing={1}
                    sx={{ mb: 2, mt: 1 }}
                  >
                    Our innovative programs bridge the gap between education and
                    employment, preparing you to thrive in today’s competitive
                    job market. Whether you’re starting your career or looking
                    to upskill, groMind Academy is here to guide you every step
                    of the way.
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AboutUs;

AboutUs.propTypes = {
  isFullPage: PropTypes.bool,
};
