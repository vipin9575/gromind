import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Timers from "../Timers";
import CourseRegistrationForm from "../CourseRegistrationForm";

const RegistrationBanner = () => {
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
              fontSize={16}
              fontWeight={500}
              lineHeight={1.5}
              textAlign={{ xs: "center", sm: "left" }}
            >
              GET 100s OF ONLINE COURSES FOR FREE
            </Typography>
            <Typography
              fontSize={{ xs: 36, sm: 48 }}
              fontWeight={500}
              lineHeight={1.5}
              textAlign={{ xs: "center", sm: "left" }}
            >
              REGISTER NOW
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              gap={2}
              mt={2}
              justifyContent="center"
            >
              <Timers count="00" title="Days" />
              <Timers count="00" title="Hours" />
              <Timers count="00" title="Minutes" />
              <Timers count="00" title="Seconds" />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6.5 }}>
            <CourseRegistrationForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RegistrationBanner;
