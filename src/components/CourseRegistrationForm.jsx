import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "Hi, I am enquiring about xyz",
  });
  const [courses, setCourses] = useState([]);
  const [errors, setErrors] = useState({});

  const fetchCourse = async () => {
    try {
      const res = await axios.get("https://api.gromindacademy.com/course/all");
      if (res.status === 200) {
        setCourses(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

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
      onSubmit(formData);

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
    <Box component="form" onSubmit={handleSubmit}>
      <Box bgcolor={"var(--primary-color)"} p={2}>
        <Typography
          color={"var(--main-white-color)"}
          fontSize={18}
          fontWeight={500}
          lineHeight={1.5}
        >
          Register Now !
        </Typography>
      </Box>
      <Box bgcolor={"var(--main-white-color)"} px={2} py={4}>
        <Box display="flex" flexWrap="wrap" columnGap={2}>
          <Box width={{ xs: "100%", md: "48%" }}>
            <FormControl fullWidth error={!!errors.full_name} sx={{ mt: 2 }}>
              <OutlinedInput
                placeholder="First Name"
                fullWidth
                name="full_name"
                value={formData.full_name || ""}
                onChange={handleChange}
              />
              {errors.full_name && (
                <FormHelperText>{errors.full_name}</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box width={{ xs: "100%", md: "48%" }}>
            <FormControl fullWidth error={!!errors.email} sx={{ mt: 2 }}>
              <OutlinedInput
                placeholder="Email Id"
                fullWidth
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
              />
              {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
            </FormControl>
          </Box>
          <Box width={{ xs: "100%", md: "48%" }}>
            <FormControl fullWidth error={!!errors.phone} sx={{ mt: 2 }}>
              <OutlinedInput
                placeholder="Phone Number"
                fullWidth
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
              />
              {errors.phone && <FormHelperText>{errors.phone}</FormHelperText>}
            </FormControl>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography
            fontSize={{ xs: 14, md: 18 }}
            fontWeight={600}
            lineHeight={1.5}
            color="var(--main-gray-color)"
            mb={{ xs: 2, sm: 0 }}
          >
            Which Course are you interested in?
          </Typography>
          <Stack
            p={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            bgcolor="#632B900A"
            mt={2}
            border={1}
            borderRadius={1}
            borderColor="#bbb"
          >
            <FormControl error={!!errors.subject}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={formData.subject}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "subject",
                      value: e.target.value,
                    },
                  })
                }
              >
                {courses.map((course, index) => (
                  <FormControlLabel
                    key={index}
                    value={course?.course_name}
                    control={<Radio />}
                    label={course?.course_name}
                    sx={{
                      color: "var(--main-gray-color)",
                      "& .MuiFormControlLabel-label": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                ))}
              </RadioGroup>
              {errors.subject && (
                <FormHelperText>{errors.subject}</FormHelperText>
              )}
            </FormControl>
          </Stack>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "var(--main-blue-color)",
                boxShadow: "none",
                px: 4,
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

CourseRegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CourseRegistrationForm;
