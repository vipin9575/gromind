import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://api.gromindacademy.com/course/popular"
      );
      const data = response?.data || [];
      // console.log(data);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={4}>
      <Box textAlign="center" px={{ xs: 2, md: 0 }}>
        <Typography
          fontSize={{ xs: 24, sm: 32, md: 40 }}
          fontWeight={600}
          color="var(--primary-color)"
        >
          POPULAR COURSES
        </Typography>
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 20 }}
          fontWeight={400}
          color="var(--secondary-color)"
        >
          Empower Your Career - Industry Oriented Curriculum - Develop the Key
          Skills for Corporate Success
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
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          {courses.map(
            ({ course_name, description, image, url_part }, index) => {
              let domain = "https://img.gromindacademy.com";
              return (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    maxWidth: 375,
                    borderRadius: 0,
                    border: "1px solid #707070",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={domain + image}
                    title={course_name}
                  />
                  <CardContent>
                    <Typography
                      fontSize={22}
                      fontWeight={600}
                      lineHeight={1.5}
                      color="var(--secondary-color)"
                      sx={{ mb: 1 }}
                    >
                      {course_name}
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      lineHeight={1.5}
                      color="var(--secondary-color)"
                      sx={{ mb: 6 }}
                    >
                      {description ||
                        "Launch your career in Data Analytics. Build in-demand skills and gain credentials to go from beginner to job-ready in 8 months or less. No degree or prior experience required."}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      bgcolor: "var(--secondary-gray-color)",
                      borderTop: "1px solid #707070",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                    }}
                  >
                    <Link
                      to={`/courses/${url_part}`}
                      style={{
                        textDecoration: "none",
                        color: "var(--secondary-color)",
                        fontWeight: 500,
                        fontSize: 16,
                      }}
                    >
                      Explore more
                    </Link>
                  </CardActions>
                </Card>
              );
            }
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default PopularCourses;
