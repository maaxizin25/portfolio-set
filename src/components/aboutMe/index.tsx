import { GlobalContainer } from "../../containers";
import { AboutMeStyledComponent } from "./style";
import projectImg from "../../assets/project-img.png";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export const AboutMeComponent = () => {
  const { languageTexts } = useContext(AppContext);
  return (
    <AboutMeStyledComponent>
      <GlobalContainer>
        <div className="container-component">
          <div className="section-one-info">
            <div className="title">
              <div className="element-start"></div>
              <h3>{languageTexts.experience.about}</h3>
            </div>
            <div className="section-one-about">
              <h2>{languageTexts.experience.title}</h2>
              <p>{languageTexts.experience.description}</p>
            </div>
          </div>
          <div className="section-two-info">
            <div className="experience">
              <div>
                <h2>+1</h2>
                <p>{languageTexts.experience.yearOfExperience}</p>
              </div>
              <div>
                <h2>12</h2>
                <p>{languageTexts.experience.projectsCount}</p>
              </div>
            </div>
            <div className="experience-subscription">
              <p>{languageTexts.experience.subscriptionProjects}</p>
            </div>
            <a href="">
              <img src={projectImg} alt="" />
              <p>{languageTexts.welcomeTitle.button}</p>
            </a>
          </div>
        </div>
      </GlobalContainer>
    </AboutMeStyledComponent>
  );
};
