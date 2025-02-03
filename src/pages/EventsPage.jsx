import {
  Box,
  Container,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import moment from "moment";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const formattedDate = (dateString) =>
  moment(dateString).format("MMMM D, YYYY h:mm A");

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Grid container>
              <Grid size={{ xs: 12, md: 8 }}>
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
                    Get Guidance on Building a Career as an AI Engineer
                  </Typography>
                  <Stack direction="row" spacing={2} mb={2}>
                    <Typography
                      variant="body1"
                      color="var( --main-gray-color)"
                      fontWeight={600}
                      sx={{ mb: 2 }}
                    >
                      STARTS ON:{" "}
                      <Typography
                        component="span"
                        variant="body1"
                        fontWeight={400}
                      >
                        {formattedDate(events[0]?.start_datetime)}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="var( --main-gray-color)"
                      fontWeight={600}
                      sx={{ mb: 2 }}
                    >
                      ENDS ON:{" "}
                      <Typography
                        component="span"
                        variant="body1"
                        fontWeight={400}
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
                    {parse(events[0]?.long_desc || "")}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default EventsPage;
