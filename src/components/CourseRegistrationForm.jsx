import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,useMediaQuery
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";


const CourseRegistrationForm = ({
  title = "Register Now !",
  courseOptions = {
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
  },
  onSubmit,
}) => {
  const isMobile = useMediaQuery('(max-width:600px)')
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
      // console.log(formData);
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
          {title}
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
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0, sm: 0 }}
          >
            {Object.entries(courseOptions).map(([courseType, options]) => (
              <Card
                sx={{
                  flexGrow: 1,
                  p: 2,
                  pb: !isMobile ? 2 : courseType === "Online" ? 0 : 2,
                  pt:!isMobile ? 2 : courseType === "Online" ? 2 : 0,
                  bgcolor: "#632B900A",
                  border: "none",
                }}
                elevation={0}
                key={courseType}
              >
                <FormControl error={!!errors.subject}>
                  <FormLabel
                    sx={{
                      fontSize: 18,
                      fontWeight: 600,
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
                    onChange={(e) =>
                      handleChange({
                        target: {
                          name: "subject",
                          value: e.target.value,
                        },
                      })
                    }
                  >
                    {options.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
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
              </Card>
            ))}
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
  title: PropTypes.string,
  formFields: PropTypes.array,
  courseOptions: PropTypes.object,
};

export default CourseRegistrationForm;
