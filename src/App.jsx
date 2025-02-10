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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import { ToastContainer } from "react-toastify";
import BlogsPage from "./pages/BlogsPage";

const App = () => {
  return (
    <>
      <ToastContainer />
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
            <Route path="/events/:event_name/:id" element={<EventsPage />} />
          </Route>

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
