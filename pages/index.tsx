//COMPONENTS
import LandingPageBanner from "../layouts/LandingPageSection";
import OurExpertiseSection from "../layouts/OurExpertiseSection";
import AboutUsSection from "../layouts/AboutUsSection";

const HomePage = () => {
  return (
    <div className="App">
      <LandingPageBanner />
      <OurExpertiseSection />
      <AboutUsSection />
    </div>
  )
}

export default HomePage;
