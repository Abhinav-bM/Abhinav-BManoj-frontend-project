import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import LeaderSection from "./components/LeaderSection"
import ProjectSection from "./components/ProjectSection"
import Section4 from "./components/Section4"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"

const App = () => {
  return (
    <>
      <Header />
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
  )
}

export default App
