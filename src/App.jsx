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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/courses" element={<CouresPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
