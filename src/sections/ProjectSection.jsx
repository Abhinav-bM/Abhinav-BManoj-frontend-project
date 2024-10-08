import "../styles/sections/projectSection.css";
import ProjectList from "../components/ProjectList";

const ProjectSection = () => {
  return (
    <section className="projectSec">
      <div className="projSec1">
        <ProjectList />
        <ProjectList />
      </div>

      <div className="projSec2">
        <div className="projSec2First">
          <div className="first">
            {" "}
            <div className="ellipse"></div>
            Featured Works
          </div>
          <div className="second">
            Take a look at <br /> our projects
          </div>
        </div>

        <div className="projSec2Second">
          <ProjectList />
          <ProjectList />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
