import HeroSection from "../heroSection/HeroSection";
import AboutUs from "../aboutUs/AboutUs";
import PopularCourses from "../popularCourses/PopularCourses";
import RegistrationBanner from "../registrationBanner/RegistrationBanner";
import Testitmonial from "../testimonials/Testitmonial";
import UpcomingEvents from "../upcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs isFullPage={false} />
      <PopularCourses />
      <RegistrationBanner />
      <UpcomingEvents />
      <Testitmonial />
    </>
  );
};

export default Home;
