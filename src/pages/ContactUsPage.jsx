import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RegistrationBanner from "../components/registrationBanner/RegistrationBanner";
import PopularCourses from "../components/popularCourses/PopularCourses";
import Grid from "@mui/material/Grid2";

const courseOptions = {
  Online: [
    "Tableau and Advanced Excel",
    "Power BI and Advanced Excel",
    "Salesforce Developer",
    "Python and SQL",
    "Java Developer",
  ],
  Offline: [
    "Database Administrator",
    "HR Development Program",
    "HR Business Partnering",
    "Technical Recruiting",
    "Digital Marketing & Gen AI",
  ],
};

const ContactUsPage = () => {
  return (
    <Box mt={28}>
      {/* <AboutUs isFullPage={true} /> */}
      <Box>
        <Container maxWidth="lg">
          <Box textAlign="left" mb={4}>
            <Typography
              fontSize={40}
              fontWeight={600}
              color="rgba(99, 43, 144, 1)"
            >
              Contact Us
            </Typography>
            <Divider
              sx={{
                width: { md: 145, sm: 100, xs: 50 },
                height: 4,
                bgcolor: "var(--secondary-color)",
                mt: 1,
              }}
            />
          </Box>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid size={{ xs: 12, sm: 7 }}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <FormControl fullWidth>
                    <FormLabel
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--secondary-color)",
                        mb: 1,
                      }}
                    >
                      First Name
                    </FormLabel>
                    <TextField
                      variant="outlined"
                      placeholder="First name"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--secondary-color)",
                        mb: 1,
                      }}
                    >
                      Email
                    </FormLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="you@Compay.com"
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <FormLabel
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--secondary-color)",
                        mb: 1,
                      }}
                    >
                      Phone
                    </FormLabel>

                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="phone"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Typography
                  fontSize={{ xs: 14, md: 18 }}
                  fontWeight={600}
                  lineHeight={1.5}
                  color="var(--main-gray-color)"
                  mb={{ xs: 2, sm: 1 }}
                >
                  Which Course are you interested in?
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  {Object.entries(courseOptions).map(
                    ([courseType, options]) => (
                      <Card
                        sx={{
                          flexGrow: 1,
                          p: 2,
                          bgcolor: "#632B900A",
                          border: "1px solid #BBBBBB",
                        }}
                        elevation={0}
                        key={courseType}
                      >
                        <FormControl>
                          <FormLabel
                            sx={{
                              fontSize: 18,
                              fontWeight: 700,
                              color: "var(--main-gray-color)",
                            }}
                            id={`radio-group-label-${courseType}`}
                          >
                            {courseType}
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby={`radio-group-label-${courseType}`}
                            name={`radio-buttons-group-${courseType}`}
                            defaultValue={options[0]}
                          >
                            {options.map((option, index) => (
                              <FormControlLabel
                                key={index}
                                value={option}
                                control={<Radio />}
                                label={option}
                                sx={{ color: "var(--main-gray-color)" }}
                              />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </Card>
                    )
                  )}
                </Stack>
                <Box display="flex" mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "var(--main-blue-color)",
                      boxShadow: "none",
                      px: 4,
                      textTransform: "none",
                      borderRadius: 0,
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Grid container spacing={4}>
                <Grid size={12}>
                  <Typography fontWeight={600}>Email</Typography>
                  <Typography fontWeight={400} color="#515151">
                    hr@groMindacademy.com
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontWeight={600}>Call /WhatsApp</Typography>
                  <Typography fontWeight={400} color="#515151">
                    +91 9266464133
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontWeight={600}>Head Office</Typography>
                  <Typography fontWeight={400} color="#515151">
                    The Iconic Corenthum, <br /> Sector 62 <br /> Noida - 201301
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <PopularCourses />
      <RegistrationBanner />
    </Box>
  );
};

export default ContactUsPage;
