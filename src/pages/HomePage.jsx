import About from "../sections/About";
import ContactUs from "../sections/ContactUs";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import LeaderSection from "../sections/LeaderSection";
import ProjectSection from "../sections/ProjectSection";
import Section4 from "../sections/Section4";
import Services from "../sections/Services";
import Testimonial from "../sections/Testimonial";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Section4 />
      <ProjectSection />
      <Services />
      <LeaderSection />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
