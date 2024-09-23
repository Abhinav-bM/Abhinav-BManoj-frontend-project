import PropTypes from "prop-types";
import "../../styles/Reusable/servicesList.css";

const ServicesList = ({ color1, color2, text }) => {
  return (
    <div
      className="serviceListMain"
      style={{ backgroundColor: color1, color: color2 }}
    >
      <div className="serviceListText1">
        {text}

      </div>
      <div className="serviceListText2">
        We provide digital solutions as Website Design, Mobile App Design,
        Landing Page design, Illustration, Animation, etc that increase
        company’s values
      </div>
    </div>
  );
};

// PropTypes validation
ServicesList.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServicesList;
