import "../../styles/Reusable/projectList.css";
import robo from "../../assets/images/robo.jpg"

const ProjectList = () => {
  return (
    <div className="projectListMain">
      <div className="proListMainImg">
        <img
          src={robo}
          alt="Image goes here"
        />
      </div>
      <div className="proListText">
        <div className="proListTextFirst">
          <div className="text1">Development</div>
          <div className="text2">UI/UX</div>
          <div className="text3">Illustration</div>
        </div>
        <div className="proListTextSecond">Roboto Landing page</div>
      </div>
    </div>
  );
};

export default ProjectList;
