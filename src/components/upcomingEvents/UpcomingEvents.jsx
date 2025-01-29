import { Box, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EventsCard from "../EventsCard";
// import eventImg from "../../images/events.svg";
import clockIcon from "../../images/clockIcon.svg";
import locationIcon from "../../images/locationIcon.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.gromindacademy.com/event/all"
      );
      if (response.status === 200) {
        setEvents(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          {events.map((event) => (
            <EventsCard
              key={event._id}
              eventImg={event.image}
              date={moment(event.start_datetime).format("DD")}
              month={moment(event.start_datetime).format("MMM")}
              time={`${moment(event.start_datetime).format("hh A")} - ${moment(
                event.endt_datetime
              ).format("hh A")}`}
              location={event.location}
              description={
                event.event_name ||
                "Lorem Ipsum is simply dummytext of the Lorem Ipsum"
              }
              clockIcon={clockIcon}
              locationIcon={locationIcon}
            />
          ))}
          {/* <EventsCard
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
          /> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default UpcomingEvents;
