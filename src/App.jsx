import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "../src/components/home/Home";
import Footer from "./components/footer/Footer";
import AboutUsPage from "./pages/AboutUsPage";
import CouresPage from "./pages/CouresPage";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import "./App.css";
import ContactUsPage from "./pages/ContactUsPage";
import EventsPage from "./pages/EventsPage";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/courses" element={<CouresPage />}>
            <Route path="/courses/:id" element={<CouresPage />} />
          </Route>

          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/events" element={<EventsPage />}>
            <Route path="/events/:event_name" element={<EventsPage />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
