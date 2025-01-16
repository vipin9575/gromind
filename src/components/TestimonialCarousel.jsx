import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Carousel
      autoPlay={false}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      emulateTouch
      interval={5000}
      transitionTime={500}
    >
      {testimonials.map((testimonial, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            py: 8,
          }}
        >
          {testimonial.image && (
            <Box
              width={{ sm: 140, xs: 100 }}
              height={{ sm: 140, xs: 100 }}
              border={4}
              borderColor="white"
              borderRadius={50}
            >
              {/* <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: "100%", height: "100%" }}
              /> */}
            </Box>
          )}
          {testimonial.name && (
            <Typography
              color="common.white"
              fontSize={{ md: 26, sm: 22, xs: 18 }}
              fontWeight={500}
              lineHeight={1.5}
              mt={4}
            >
              {testimonial.name}
            </Typography>
          )}
          {testimonial.role && (
            <Typography
              color="common.white"
              fontSize={{ md: 20, sm: 16, xs: 14 }}
              fontWeight={500}
              lineHeight={1.5}
            >
              {testimonial.role}
            </Typography>
          )}
          {testimonial.content &&
            testimonial.content.map((content, index) => (
              <Typography
                key={index}
                color="common.white"
                fontSize={{ md: 20, sm: 16, xs: 14 }}
                fontWeight={500}
                lineHeight={1.5}
                mt={index === 0 ? 4 : 0}
              >
                {content}
              </Typography>
            ))}
        </Box>
      ))}
    </Carousel>
  );
};

TestimonialCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      content: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default TestimonialCarousel;
