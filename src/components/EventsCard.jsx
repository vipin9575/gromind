import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const EventsCard = ({
  eventImg,
  date,
  month,
  time,
  location,
  description,
  clockIcon,
  locationIcon,
  buttonText = "View Details",
  url,
}) => {
  const navigate = useNavigate();
  return (
    <Grid
      size={{ xs: 12, md: 6 }}
      sx={{
        width: "100%",
        height: "360px",
        backgroundImage: `url(${eventImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        border: "1px solid #ddd",
      }}
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        bgcolor="#0000008f"
        p={{ xs: 1, md: 2 }}
        color="var(--main-white-color)"
        sx={{ width: "50%", height: "100%" }}
        display="flex"
        flexDirection="column"
        justifyContent={{ xs: "space-around", md: "flex-start" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={{ xs: 1, sm: 2, md: 4 }}
      >
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              fontSize={{ xs: 24, md: 36 }}
              lineHeight={{ xs: 2, md: 1.5 }}
              mb={-2}
              fontWeight={700}
            >
              {date}
            </Typography>
            <Typography fontSize={16} lineHeight={1.5} fontWeight={500}>
              {month}
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderWidth: 2,
              borderColor: "var(--main-white-color)",
              mx: 2,
              my: 0.8,
            }}
          />
          <Box display="flex" flexDirection="column" gap={1} flex={1} py={1}>
            <Typography
              fontSize={14}
              lineHeight={1.5}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <img
                src={clockIcon}
                alt="clock"
                style={{ width: 16, height: 16 }}
              />
              {time}
            </Typography>
            <Typography
              fontSize={14}
              lineHeight={1.5}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <img
                src={locationIcon}
                alt="location"
                style={{ width: 16, height: 16 }}
              />
              {location}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize={{ xs: 14, md: 21 }}
            lineHeight={1.5}
            fontWeight={400}
          >
            {description}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => navigate(`/events/${url}`)}
            variant="contained"
            sx={{
              bgcolor: "var(--main-blue-color)",
              color: "var(--main-white-color)",
              textTransform: "none",
              fontSize: { xs: 12, md: 16 },
              lineHeight: 1.5,
              fontWeight: 400,
              px: { xs: 2, md: 4 },
              py: 1,
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

EventsCard.propTypes = {
  eventImg: PropTypes.string,
  date: PropTypes.string,
  month: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
  clockIcon: PropTypes.string,
  locationIcon: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
};

export default EventsCard;
