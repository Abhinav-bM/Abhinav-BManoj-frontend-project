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
            development studio <br /> that is passionate about creating high <br /> applicability digital experiences.
          </p>
          <button className="explore-btn">Explore</button>
        </div>
        <div className="secImg">
          <img src="your-image-url.jpg" alt="Description of the image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
