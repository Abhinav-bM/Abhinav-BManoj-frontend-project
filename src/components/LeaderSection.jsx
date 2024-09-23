import "../styles/leaderSection.css";
import LeaderList from "./Reusable/LeaderList";
const LeaderSection = () => {
  return (
    <section className="leaderSecMain">
      <div className="leaderSecText">
        <div className="leaderSecText1">. Our leader</div>
        <div className="leaderSecText2">
          Each product is crafted with passion and <br /> dedication. Meet our
          leader !
        </div>
      </div>
      <div className="leaderSecList">
        <div className="leaderSecList1">
          <div className="secListOne"></div>
          <LeaderList />
          <div className="secListTwo"></div>
        </div>
        <div className="leaderSecList2">
          <div className="secListThree"></div>
          <LeaderList />
          <div className="secListFour"></div>
        </div>
        <div className="leaderSecList3">
          <div className="secListFive"></div>
          <LeaderList />
          <div className="secListSix"></div>
        </div>
      </div>
    </section>
  );
};

export default LeaderSection;
