import { Box, Divider, Typography } from "@mui/material";
import feedBackImg from "../../images/testimonial.png";
import TestimonialCarousel from "../TestimonialCarousel";

const testimonials = [
  {
    image: "https://via.placeholder.com/140",
    name: "Tarik Aziz",
    role: "Web Developer",
    content: [
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the Lorem Ipsum.",
    ],
  },
  {
    name: "Testimonial 2",
    content: ["Short content for the second testimonial."],
  },
  {
    name: "Testimonial 3",
    content: ["Another testimonial with minimal content."],
  },
  {
    name: "Testimonial 4",
    content: ["Another testimonial with minimal content."],
  },
  {
    name: "Testimonial 5",
    content: ["Another testimonial with minimal content."],
  },
];

const Testitmonial = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box textAlign="center" px={{ xs: 2, md: 0 }}>
        <Typography
          fontSize={{ xs: 24, sm: 32, md: 40 }}
          fontWeight={600}
          color="var(--primary-color)"
        >
          Testimonials
        </Typography>
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 20 }}
          fontWeight={400}
          color="var(--secondary-color)"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. L
        </Typography>

        <Divider
          sx={{
            width: { md: 145, sm: 100, xs: 50 },
            height: 4,
            bgcolor: "var(--secondary-color)",
            mx: "auto",
            mt: 4,
          }}
        />
      </Box>
      <Box
        sx={{
          mt: 4,
          width: "100%",
          height: { sm: "80vh", xs: "80vh" },
          backgroundImage: `url(${feedBackImg})`,
          backgroundSize: "cover",
          backgroundPositionX: "10%",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <TestimonialCarousel testimonials={testimonials} />
      </Box>
    </Box>
  );
};

export default Testitmonial;
