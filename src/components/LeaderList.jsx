import PropTypes from "prop-types";
import "../styles/components/leaderList.css";

const LeaderList = ({ bgc, color }) => {
  return (
    <div className="leaderListMain" style={{ backgroundColor: bgc }}>
      <div className="content" style={{ backgroundColor: color }}>
        <div className="content1">
          <h3>Cody Fisher</h3>
          <p className="none">CEO Founder</p>
        </div>
        <div className="content2">
          <div className="iconss">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="iconss">
            {" "}
            <i className="fab fa-instagram"></i>
          </div>
          <div className="iconss">
            {" "}
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

LeaderList.propTypes = {
  color: PropTypes.string.isRequired,
  bgc: PropTypes.string.isRequired,
};

export default LeaderList;
