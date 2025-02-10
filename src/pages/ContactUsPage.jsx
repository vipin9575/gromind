import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RegistrationBanner from "../components/registrationBanner/RegistrationBanner";
import PopularCourses from "../components/popularCourses/PopularCourses";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


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
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "Hi, I am enquiring about xyz",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.full_name) {
      newErrors.full_name = "First Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.full_name)) {
      newErrors.full_name = "First Name must contain only alphabets.";
    }

    if (!formData.email) {
      newErrors.email = "Email Id is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email Id is not valid.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be exactly 10 digits.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a course.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = axios.post(
          "https://api.gromindacademy.com/contact-us",
          formData
        );
        if (response) console.log("Response:", response);
        toast.success("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred while submitting the form.");
      }

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
      });

      setErrors({});
    }
  };

  return (
    <Box mt={28}>
      {/* <AboutUs isFullPage={true} /> */}
      <Box component="form" onSubmit={handleSubmit}>
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
                  <FormControl fullWidth error={!!errors.full_name}>
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
                      name="full_name"
                      value={formData.full_name || ""}
                      onChange={handleChange}
                    />
                    {errors.full_name && (
                      <FormHelperText>{errors.full_name}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth error={!!errors.email}>
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
                      name="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <FormHelperText>{errors.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth error={!!errors.phone}>
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
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <FormHelperText>{errors.phone}</FormHelperText>
                    )}
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
                        <FormControl error={!!errors.subject}>
                          <FormLabel
                            sx={{
                              fontSize: 18,
                              fontWeight: 700,
                              color: "var(--main-gray-color)",
                            }}
                            id={`radio-group-label-${courseType}`}
                          >
                            {/* {courseType} */}
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby={`radio-group-label-${courseType}`}
                            name={`radio-buttons-group-${courseType}`}
                            value={formData.subject}
                          >
                            {options.map((option, index) => (
                              <FormControlLabel
                                key={index}
                                value={option}
                                control={<Radio />}
                                label={option}
                                sx={{ color: "var(--main-gray-color)" }}
                                onChange={(e) =>
                                  handleChange({
                                    target: {
                                      name: "subject",
                                      value: e.target.value,
                                    },
                                  })
                                }
                              />
                            ))}
                          </RadioGroup>
                          {errors.subject && (
                            <FormHelperText>{errors.subject}</FormHelperText>
                          )}
                        </FormControl>
                      </Card>
                    )
                  )}
                </Stack>
                <Box display="flex" mt={2}>
                  <Button
                    type="submit"
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
                    <Link
                      href="mailto:hr@gromindacademy.com"
                      color="inherit"
                      underline="hover"
                    >
                      hr@gromindacademy.com 
                    </Link>
                  </Typography>
                </Grid>
                <Grid size={12}>
                  <Typography fontWeight={600}>Call /WhatsApp</Typography>
                  <Typography fontWeight={400} color="#515151">
                    <Link
                      href="tel:+919266464133"
                      color="inherit"
                      underline="hover"
                    >
                      +91-9266 464 133
                    </Link>
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
