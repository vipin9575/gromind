// import "./PopularCourses.css";
import TableauImage from "../../images/MaskGroup2.png"; // Update this with the correct path to your images
import PowerBIImage from "../../images/MaskGroup5.png";
import PythonSQLImage from "../../images/MaskGroup2.png";
import profileIcon from "../../images/profileIcon.svg";
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

const PopularCourses = () => {
  const courses = [
    {
      title: "Tableau and Advanced Excel",
      content:
        "Launch your career in Data Analytics. Build in-demand skills and gain credentials to go from beginner to job-ready in 8 months or less. No degree or prior experience required.",
      students: 60,
      price: "20",
      image: TableauImage,
    },
    {
      title: "Power BI and Advanced Excel",
      content:
        "Become a Power BI and Power Platform Expert. Boost Productivity, Automate Processes, and Gain Valuable Insights.",
      students: 60,
      price: "20",
      image: PowerBIImage,
    },
    {
      title: "Python and SQL",
      content:
        "Analyze data within a database using SQL and Python. Construct basic to intermediate level SQL queries using DML commands.",
      students: 60,
      price: "20",
      image: PythonSQLImage,
    },
  ];

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
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {courses.map(({ title, content, image, students, price }, index) => (
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
                image={image}
                title="excel"
              />
              <CardContent>
                <Typography
                  fontSize={22}
                  fontWeight={600}
                  lineHeight={1.5}
                  color="var(--secondary-color)"
                  sx={{ mb: 1 }}
                >
                  {title}
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={400}
                  lineHeight={1.5}
                  color="var(--secondary-color)"
                  sx={{ mb: 6 }}
                >
                  {content}
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
                <Box display="flex" alignItems="center" gap={1}>
                  <img
                    src={profileIcon}
                    alt="profile"
                    style={{ width: 20, height: 20 }}
                  />
                  <Typography color="var(--secondary-color)">
                    {students} Students
                  </Typography>
                </Box>
                <Typography color="var(--main-red-color)">${price}</Typography>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default PopularCourses;
