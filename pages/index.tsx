import Link from "next/link";
//COMPONENTS
import SplitBanner from "../layouts/SplitBanner";
import BannerContent from "../components/BannerContent";
import BannerImage from "../components/BannerImage";
import FullBanner from "../layouts/FullBanner";
import CTAButtons from "../layouts/CTAButtons";
import Button from "../components/Button";
import TilesGrid from "../components/TilesGrid";
//ASSETS
import { ourExpertise } from "../variables/ourExpertise";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <div className="App">
      <SplitBanner>
        <BannerContent>
            <h1>We paint, we build, and we fix all your problems</h1>
            <h3>Affordable solutions to common problems, with a unique customer experience for everyday households</h3>
            <CTAButtons>
              <Button className="btn primary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button className="btn secondary">
                <Link href="/work">Check our Work</Link>
              </Button>
            </CTAButtons>
        </BannerContent>
        <BannerImage imageUrl="/assets/images/PaintBrush.jpg"/>
      </SplitBanner>

      {/* Expertise section */}
      <FullBanner
        bannerSize="fullBanner"
      >
        <Title>
          Bring your dream home to life with our expertise, help, 
          and catered to you solutions 🔥
        </Title>
        <TilesGrid
          tiles={ourExpertise}
        />
      </FullBanner>
      
      {/* About us section */}
      <SplitBanner fullscreen={true}>
        <BannerImage 
          imageUrl="/assets/images/AboutUs.jpg"
        />
        <BannerContent>
            <h1>Who are we?</h1>
            <h3>
              A father and son duo! My dad bring the skills and plan. 
              I bring the attitude and tech savy-ness into this business.
              We started by building our house first and wanted to expand since we know 
              how hard it is to find the right for job.
            </h3>
            <CTAButtons>
              <Button className="btn secondary">
                <Link href="/work">Check our Work</Link>
              </Button>
            </CTAButtons>
        </BannerContent>
      </SplitBanner>
    </div>
  )
}

export default HomePage;
