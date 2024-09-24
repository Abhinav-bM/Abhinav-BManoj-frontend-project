import "../styles/heroSection.css";

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>
          We create award <br /> winning websites
        </h1>
      </div>

      <div className="secDescription">
        <div>
          <p>
            Based in San Francisco, we’re a digital <br /> products design &
            development studio <br /> that is passionate about creating high{" "}
            <br /> applicability digital experiences.
          </p>
          <button className="explore-btn">
            Explore <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <div className="secImg">
          <img src="" alt="Image goes here..." />
        </div>
      </div>
    </section>
  );
};

export default Hero;
