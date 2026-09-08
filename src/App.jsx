import Sitenavbar from "./components/site-navbar";
import AboutSection from "./sections/about-section";
import HeroSection from "./sections/hero-section";
import StatsSection from "./sections/stats-section";

const App = () => {
  return (
    <>
      <Sitenavbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
    </>
  );
};

export default App;
