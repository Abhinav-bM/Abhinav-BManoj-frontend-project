import "../styles/sections/leaderSection.css";
import LeaderList from "../components/LeaderList";

const LeaderSection = () => {
  return (
    <section className="leaderSecMain">
      <div className="leaderSecText">
        <div className="leaderSecText1">
          {" "}
          <div className="ellipse"></div>
          Our leader
        </div>
        <div className="leaderSecText2">
          Each product is crafted with passion and <br /> dedication. Meet our
          leader !
        </div>
      </div>
      <div className="leaderSecList">
        <div className="leaderSecList1">
          <div className="secListOne"></div>
          <LeaderList bgc={"#4034eb"} color={"#584EE4"} />
          <div className="secListTwo"></div>
        </div>
        <div className="leaderSecList2">
          <div className="secListThree"></div>
          <LeaderList bgc={"#111111"} color={"#151515"} />
          <div className="secListFour"></div>
        </div>
        <div className="leaderSecList3">
          <div className="secListFive"></div>
          <LeaderList bgc={"#111111"} color={"#151515"} />
          <div className="secListSix"></div>
        </div>
      </div>
    </section>
  );
};

export default LeaderSection;
