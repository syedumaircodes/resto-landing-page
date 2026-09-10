import LenisScroll from "./components/lenis-scroll";
import Sitenavbar from "./components/site-navbar";
import AboutSection from "./sections/about-section";
import BookingSection from "./sections/booking-section";
import CtaSection from "./sections/cta-section";
import DishesSection from "./sections/dishes-section";
import FaqsSection from "./sections/faqs-section";
import FeaturesSection from "./sections/features-section";
import FooterSection from "./sections/footer-section";
import HeroSection from "./sections/hero-section";
import StatsSection from "./sections/stats-section";
import TestimonialSection from "./sections/testimonial-section";
import TimmingSection from "./sections/timming-section";

const App = () => {
  return (
    <>
      <LenisScroll />
      <Sitenavbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DishesSection />
      <FeaturesSection />
      <BookingSection />
      <TimmingSection />
      <TestimonialSection />
      <FaqsSection />
      <CtaSection />
      <FooterSection />
    </>
  );
};

export default App;
