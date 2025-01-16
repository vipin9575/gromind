import bgImg from "../../images/bgImg.png";
import sideImg from "../../images/bgsidedesign.png";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  const slides = [
    {
      title: "groMind Academy",
      subtitle: "Bridging skill gap for corporate success",
      image: bgImg,
    },
    {
      title: "Grow with Confidence",
      subtitle: "Empowering your career journey",
      image: bgImg,
    },
    {
      title: "Unlock Your Potential",
      subtitle: "Join the groMind family today!",
      image: bgImg,
    },
  ];

  const customIndicator = (onClick, isSelected, label) => {
    const style = isSelected
      ? {
          backgroundColor: "var(--primary-color)",
          border: "1px solid var(--primary-color)",
          cursor: "pointer",
          width: "24px",
          height: "14px",
          borderRadius: "10px",
        }
      : {
          backgroundColor: "var(--main-white-color)",
          border: "1px solid var(--primary-color)",
          cursor: "pointer",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
        };

    return (
      <li
        style={{
          ...style,
          margin: "0 2px",
          display: "inline-block",
        }}
        onClick={onClick}
        aria-label={label}
      ></li>
    );
  };

  return (
    <Box className="heroSection" my={2}>
      <Carousel
        renderIndicator={customIndicator}
        autoPlay={false}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        emulateTouch
        interval={5000}
        transitionTime={500}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: "var(--primary-color)",
              height: 400,
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: 4, sm: 0 },
              pl: 6,
              py: { xs: 4, sm: 0 },
            }}
          >
            <Box position="absolute" top={0} left={0}>
              <img src={sideImg} alt="design" style={{ height: 400 }} />
            </Box>
            <Box
              sx={{
                flex: "1 1 60%",
                color: "var(--main-white-color)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                pl: { xs: 0, sm: 6 },
              }}
            >
              <Typography
                fontSize={{ xs: 24, sm: 32, md: 40 }}
                fontWeight={700}
                lineHeight={1.5}
              >
                {slide.title}
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 24, md: 30 }}
                fontWeight={400}
                lineHeight={1.5}
              >
                {slide.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "1 1 40%",
                px: 6,
                alignSelf: "flex-end",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  borderTopLeftRadius: 100,
                  height: 300,
                  width: "100%",
                  backgroundImage: `url(${slide.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundPositionY: "10%",
                  backgroundSize: "cover",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;
