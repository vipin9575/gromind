import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import Timers from "../Timers";
import CourseRegistrationForm from "../CourseRegistrationForm";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const RegistrationBanner = () => {
  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "https://api.gromindacademy.com/contact-us",
        formData
      );
      if (response.status === 200)
        toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <Box bgcolor="var(--secondary-blue-color)" py={8}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" gap={{ xs: 4, md: 0 }}>
          <Grid
            size={{ xs: 12, md: 5.5 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: "center", sm: "baseline" }}
            gap={1}
            color={"var(--main-white-color)"}
            sx={{
              pl: { xs: 0, md: 4 },
            }}
          >
            <Typography
              fontSize={{ xs: 36, sm: 48 }}
              fontWeight={500}
              lineHeight={1.5}
              textAlign={{ xs: "center", sm: "left" }}
            >
              REGISTER NOW
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={500}
              lineHeight={1.5}
              textAlign={{ xs: "center", sm: "left" }}
            >
              GET 100s OF ONLINE COURSES FOR FREE
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              gap={2}
              mt={2}
              justifyContent="center"
            >
              {/* <Timers count="00" title="Days" />
              <Timers count="00" title="Hours" />
              <Timers count="00" title="Minutes" />
              <Timers count="00" title="Seconds" /> */}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6.5 }}>
            <CourseRegistrationForm onSubmit={handleFormSubmit} />
          </Grid>
        </Grid>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};

export default RegistrationBanner;
