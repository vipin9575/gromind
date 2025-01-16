import AboutUs from "../components/aboutUs/AboutUs";
import { Box } from "@mui/material";
import RegistrationBanner from "../components/registrationBanner/RegistrationBanner";

const AboutUsPage = () => {
  return (
    <Box mt={28}>
      <AboutUs isFullPage={true} />
      <RegistrationBanner />
    </Box>
  );
};

export default AboutUsPage;

