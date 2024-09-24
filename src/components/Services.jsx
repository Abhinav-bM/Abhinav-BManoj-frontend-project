import "../styles/services.css";
import ServicesList from "./Reusable/ServicesList";

const Services = () => {
  return (
    <section className="servicesMain" style={{paddingTop: "10vh"}}>
      <div className="serviceContents">
        <div className="contentText">
          <div className="contentText1"><div className="ellipse"></div>Our services</div>
          <div className="contentText2">
            We are a close-knit team of experts dedicated to crafting memorable
            and <span>
              emotionally engaging websites, digital experiences, and native
              apps.
            </span>
          </div>
        </div>
        <div className="serviceList">
            <ServicesList color1={"#4034EB"} color2={"white"} text={'brand identity'} />
            <ServicesList color1={"#151515"} color2={"white"} text={'ui/ux design'} />
            <ServicesList color1={"#151515"} color2={"white"} text={'webflow developer'} />
        </div>
      </div>
    </section>
  );
};

export default Services;
