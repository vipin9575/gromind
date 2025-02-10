import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import moment from "moment";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { toast } from "react-toastify";

const formattedDate = (dateString) =>
  moment(dateString).format("MMMM D, YYYY h:mm A");

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "Events",
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
      });

      setErrors({});
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.gromindacademy.com/event/all"
      );
      if (response.status === 200) {
        setEvents(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 4,
      }}
      maxWidth="lg"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              width: "100vw",
              height: "60vh",
              backgroundImage: `url(https://img.gromindacademy.com${events[0]?.image})`,
              backgroundSize: "cover",
              backgroundPosition: {
                xs: "center",
                sm: "end",
              },
            }}
          ></Box>
          <Box sx={{ mt: 4 }}>
            <Grid
              container
              gap={2}
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Grid size={{ xs: 12, md: 6.8 }}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    lineHeight={1.5}
                    sx={{ mb: 2 }}
                  >
                    {events[0]?.event_name}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="var( --main-gray-color)"
                    sx={{ mb: 2 }}
                  >
                    {events[0]?.short_desc}
                  </Typography>
                  <Stack direction="row" spacing={2} mb={2}>
                    <Typography
                      variant="body1"
                      color="var( --main-gray-color)"
                      fontWeight={600}
                      sx={{ mb: 2 }}
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <CalendarMonthIcon />
                      <Typography
                        component="span"
                        variant="body1"
                        fontWeight={400}
                        pt={1}
                      >
                        {formattedDate(events[0]?.start_datetime)}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="var( --main-gray-color)"
                      fontWeight={600}
                      sx={{ mb: 2 }}
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <CalendarMonthIcon />
                      <Typography
                        component="span"
                        variant="body1"
                        fontWeight={400}
                        pt={1}
                      >
                        {formattedDate(events[0]?.end_datetime)}
                      </Typography>
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    color="var( --main-gray-color)"
                    fontWeight={600}
                    sx={{ mb: 2 }}
                  >
                    Venue:{" "}
                    <Typography
                      component="span"
                      variant="body1"
                      fontWeight={400}
                    >
                      {events[0]?.location} Session
                    </Typography>
                  </Typography>

                  <Divider
                    sx={{
                      my: 2,
                      height: 1,
                      borderColor: "var(--main-gray-color)",
                    }}
                  />
                  <List
                    sx={{
                      mb: 2,
                      color: "var( --main-gray-color)",
                      "& li": { mb: 1, fontSize: 14, fontWeight: 400 },
                    }}
                  >
                    <Typography variant="body1" fontWeight={600} mb={2}>
                      What you will learn from this Session:
                    </Typography>
                    {parse(events[0]?.long_desc || "")}
                  </List>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, md: 4.5 }}
                p={2.5}
                bgcolor="var(--secondary-gray-color)"
                borderRadius={2}
              >
                <Grid
                  container
                  spacing={2}
                  component="form"
                  onSubmit={handleSubmit}
                >
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
                        placeholder="Email"
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
                  <Grid
                    size={12}
                    mt={2}
                    display="flex"
                    justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "var(--main-blue-color)",
                        boxShadow: "none",
                        px: 4,
                        textTransform: "none",
                        borderRadius: 1,
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default EventsPage;
