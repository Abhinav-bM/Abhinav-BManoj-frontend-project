import "../styles/contactUs.css";
const ContactUs = () => {
  return (
    <section className="contactUsMain">
      <div className="contactSec1">
        <div className="sec1Content1">
          <div className="sec1Content1Text">Feel free to conect with us !</div>
          <div className="sec1Content1Icon">
            <div className="icons">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="icons">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="icons">
              <i className="fab fa-dribbble"></i>
            </div>
            <div className="icons">
              <i className="fab fa-behance"></i>
            </div>
          </div>
        </div>

        <div className="sec1Content2">
          <div className="contactDetails">
            <div className="contactDetailsIcon">
              <i className="fas fa-phone"></i>
              <h6>0972 663 633</h6>
            </div>
          </div>
          <div className="contactDetails">
            <div className="contactDetailsIcon">
              <i className="fas fa-envelope"></i>
              <h6>hello@wefo.com</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="contactSec2">
        <div className="contactSec2Form">
          <div className="name">
            <label htmlFor="name">
              Name <span className="redStar">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="custom-input-common"
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              Mail <span className="redStar">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="custom-input-common"
            />
          </div>
          <div className="message">
            <label htmlFor="message">
              Message <span className="redStar">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              className="custom-input"
            ></textarea>
          </div>
        </div>

        <div className="contactSec2Button">
          Send
          <div className="sendicon">
            <i className="fas fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
