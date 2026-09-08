import Sitenavbar from "./components/site-navbar";
import AboutSection from "./sections/about-section";
import DishesSection from "./sections/dishes-section";
import FeaturesSection from "./sections/features-section";
import HeroSection from "./sections/hero-section";
import StatsSection from "./sections/stats-section";

const App = () => {
  return (
    <>
      <Sitenavbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DishesSection />
      <FeaturesSection />
    </>
  );
};

export default App;
