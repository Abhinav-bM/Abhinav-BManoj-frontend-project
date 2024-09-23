import "../../styles/Reusable/leaderList.css";

const LeaderList = ({bgc, color}) => {
  return (
    <div className="leaderListMain" style={{backgroundColor : bgc}}>
      <div className="content" style={{backgroundColor : color}} ></div>
    </div>
  );
};

export default LeaderList;
