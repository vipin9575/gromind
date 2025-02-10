import { Box, Divider, Typography } from "@mui/material";
import feedBackImg from "../../images/testimonial.png";
import TestimonialCarousel from "../TestimonialCarousel";
import "./Testimonial.css";

const testimonials = [
  {
    image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
    name: "Nishant Srivastava",
    role: "Project Manager, Alshaya Group",
    content: [
      `" I highly recommend the Power BI course to anyone looking to level up their skills."`,
      `" The content was highly relevant and practical, allowing me to immediately apply the techniques to my projects."`,
      `" The trainer’s deep knowledge and step-by-step teaching style made complex concepts easy to grasp."`,
      `" The hands-on exercises transformed the way I approach project reporting and data visualization, making my work more efficient and impactful."`,
    ],
  },
  {
    image: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
    name: "Naveen Kumar",
    role: "Lead Consultant, HCL Technologies",
    content: [
      `" The course on Python provided a perfect balance of theory and practical application, making it easy to understand even the most complex topics."`,
      `" I feel much more confident in using Python and SQL to solve problems after completing the program."`,
      `" The hands-on exercises transformed the way I approach project reporting and data visualization, making my work more efficient and impactful."`,
    ],
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
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. L */}
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
        }}
        className="testimonialContainer"
      >
        <TestimonialCarousel testimonials={testimonials} />
      </Box>
    </Box>
  );
};

export default Testitmonial;
