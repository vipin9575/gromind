import { useEffect, useState } from "react";
import "./CouresPage.css";
import { Box, Divider, Container, Typography } from "@mui/material";
import axios from "axios";
import parse from "html-react-parser";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const CouresPage = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const pathName = location.pathname.split("/")[2];
  const [activeTab, setActiveTab] = useState(
    pathName || "tableau-and-advanced-excel"
  );
  // console.log(pathName, activeTab, pathName === activeTab);

  const fetchAllCourses = async () => {
    try {
      const res = await axios.get("https://api.gromindacademy.com/course/all");

      if (res.status === 200) {
        setCourses(res.data);
        console.log(res.data);
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
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Box textAlign="left">
            <Typography
              fontSize={40}
              fontWeight={600}
              color="rgba(99, 43, 144, 1)"
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
