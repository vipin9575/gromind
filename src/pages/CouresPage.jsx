import { useEffect, useState } from "react";
import "./CouresPage.css";
import {
  Box,
  Divider,
  Container,
  Typography,
  Stack,
  Tooltip,
  Link,
} from "@mui/material";
import axios from "axios";
import parse from "html-react-parser";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const CouresPage = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const pathName = location.pathname.split("/")[2];
  const [activeTab, setActiveTab] = useState(
    pathName || "tableau-and-advanced-excel"
  );

  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("https://api.gromindacademy.com/course/all");

      if (res.status === 200) {
        setCourses(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleTabClick = (courseName) => {
    setActiveTab(courseName);
    navigate(`/courses/${encodeURIComponent(courseName)}`);
  };

  const renderTabs = () => {
    return courses.map((program, index) => (
      <button
        key={index}
        onClick={() => handleTabClick(program.url_part)}
        className={activeTab === program.url_part ? "active" : ""}
      >
        {program.course_name}
      </button>
    ));
  };
  const renderContent = () => {
    const activeProgram = courses.find(
      (program) => program.url_part === activeTab
    );
    return (
      <div>
        {" "}
        <h3>{activeProgram?.course_name}</h3>{" "}
        <ul>{parse(activeProgram?.course_details || "")}</ul>
      </div>
    );
  };
  return (
    <Box mt={28}>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Stack
            textAlign="left"
            direction="row"
            justifyContent="space-between"
          >
            <Box textAlign="left">
              <Typography
                fontSize={{ xs: 24, sm: 32, md: 40 }}
                fontWeight={600}
                color="var(--primary-color)"
              >
                What We Offer?
              </Typography>
              <Divider
                sx={{
                  width: 145,
                  height: 2,
                  bgcolor: "rgba(0, 0, 0, 1)",
                  borderBottomWidth: 2,
                }}
              />
              <Typography fontSize={20} fontWeight={400} color="#000" mt={4}>
                Online & Offline
              </Typography>
            </Box>
            <Tooltip title="Chat on WhatsApp" placement="left-start" arrow>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Link
                  href="https://wa.me/919266464133/?text=Hello%20groMind%20Academy"
                  aria-label="Chat on WhatsApp"
                  alignSelf={{ xs: "end", md: "center" }}
                  sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}
                >
                  <WhatsAppIcon
                    sx={{ fontSize: 30, fill: "var(--main-green-color)" }}
                  />
                </Link>
              </motion.div>
            </Tooltip>
          </Stack>
          <Box
            className="tabs"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            {" "}
            {renderTabs()}{" "}
          </Box>
          <Box className="content"> {renderContent()} </Box>
        </Container>
      )}
    </Box>
  );
};

export default CouresPage;
