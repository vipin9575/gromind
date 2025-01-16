import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const CourseRegistrationForm = ({
  title = "Create Your Free Account Now !",
  formFields = ["First Name", "Email Id", "Phone Number"],
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
}) => {
  return (
    <Box>
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
        <Box display="flex" flexWrap="wrap" gap={2}>
          {formFields.map((field, index) => (
            <Box key={index} width={{ xs: "100%", md: "48%" }}>
              <OutlinedInput placeholder={field} fullWidth />
            </Box>
          ))}
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
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {Object.entries(courseOptions).map(([courseType, options]) => (
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
                      fontWeight: 600,
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
                        sx={{
                          color: "var(--main-gray-color)",
                          "& .MuiFormControlLabel-label": {
                            fontSize: "0.9rem",
                          },
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Card>
            ))}
          </Stack>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
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
