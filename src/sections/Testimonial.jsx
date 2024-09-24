import "../styles/sections/testmonial.css";
import avatar from "../assets/images/kirelAvatar.png"

const Testimonial = () => {
  return (
    <section className="testimonialMain">
      <div className="testimonialSec1">
        <div className="subHeading">
          <div className="ellipse"></div>
          Testimonials
        </div>
      </div>

      <div className="testimonialSec2">
        <div className="sec2Text">
          <h4>
            A studio filled with passion, professionalism, and boundless
            creativity. They exceeded my expectations with their excellent
            services, high-quality products, and affordable prices. Iam
            extremely satisfied!
          </h4>
          <div className="textDetail">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="avatarText">
              <h6>Kathryn Murphy</h6>
              <p>Senior Marketing, Spotify</p>
            </div>
          </div>
          
        </div>

        <div className="testBtn">
          <div className="testBtn1">
            <i className="fa-solid fa-arrow-right fa-flip-horizontal fa-xl" style={{color: "#ffffff"}}></i>
          </div>
          <div className="testBtn2">
            <i className="fa-solid fa-arrow-right fa-xl" style={{color: "#ffffff"}}></i>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonial;
