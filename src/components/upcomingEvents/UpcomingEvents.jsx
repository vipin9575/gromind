import { Box, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EventsCard from "../EventsCard";
import eventImg from "../../images/events.svg";
import clockIcon from "../../images/clockIcon.svg";
import locationIcon from "../../images/locationIcon.svg";

const UpcomingEvents = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={4}>
      <Box textAlign="center" px={{ xs: 2, md: 0 }}>
        <Typography
          fontSize={{ xs: 24, sm: 32, md: 40 }}
          fontWeight={600}
          color="var(--primary-color)"
        >
          Upcoming Events
        </Typography>
        <Typography
          fontSize={{ xs: 14, sm: 16, md: 20 }}
          fontWeight={400}
          color="var(--secondary-color)"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. L
        </Typography>

        <Divider
          sx={{
            width: { md: 145, sm: 100, xs: 50 },
            height: 4,
            bgcolor: "var(--secondary-color)",
            mx: "auto",
            mt: 4,
          }}
        />
      </Box>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <EventsCard
            eventImg={eventImg}
            date="13"
            month="Nov"
            time="12:00 AM - 12:30 AM"
            location="Hilton Quebec"
            description="Lorem Ipsum is simply dummytext of the Lorem Ipsum"
            clockIcon={clockIcon}
            locationIcon={locationIcon}
          />
          <EventsCard
            eventImg={eventImg}
            date="13"
            month="Nov"
            time="12:00 AM - 12:30 AM"
            location="Hilton Quebec"
            description="Lorem Ipsum is simply dummytext of the Lorem Ipsum"
            clockIcon={clockIcon}
            locationIcon={locationIcon}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default UpcomingEvents;
