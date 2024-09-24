import "../styles/sections/about.css";
const About = () => {
  return (
    <section className="aboutSection">
      <div className="aboutMain">
        <p>          <div className="ellipse"></div>
        Who we are ?</p>
        <div className="btn-area"></div>
      </div>

      <div className="aboutContent">
        <h3>
          We create mind-blowing visuals , brands <br />
          websites and products{" "}
          <span>
            that help <br /> startups and innovative companies gain more
            exposure{" "}
          </span>
        </h3>
        <div className="about-btn">
          <div>Learn More </div>
        </div>
      </div>
    </section>
  );
};

export default About;
