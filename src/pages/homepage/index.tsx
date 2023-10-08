import { useContext } from "react";
import { NavBar } from "../../components/navbar";
import { GlobalContainer } from "../../containers";
import { HomePageStyled } from "./style";
import { AppContext } from "../../context/appContext";
import gitimg from "../../assets/gitimg.png";
import projectimg from "../../assets/project-img.png";
import linkedinimg from "../../assets/linkedinimg.png";
import instaimg from "../../assets/instaimg.png";
import { LineComponent } from "../../components/line";
import { languagePortfolio } from "../../mock/mock-langue";

export const HomePage = () => {
  const { languageTexts } = useContext(AppContext);
  const languageImgArray = Object.values(languagePortfolio.languagesImg);
  console.log(languageImgArray);
  return (
    <HomePageStyled>
      <NavBar />
      <main>
        <GlobalContainer>
          <div className="elements-container">
            <div className="welcome-text">
              <LineComponent />
              <h2>{languageTexts.welcomeTitle.title}</h2>
              <h3>{languageTexts.welcomeTitle.subtitle}</h3>
              <p>{languageTexts.welcomeTitle.description}</p>
              <div className="container-button">
                <a href="">
                  <img src={gitimg} alt="" />
                  <h2>GITHUB</h2>
                </a>
                <a href="">
                  <img src={projectimg} alt="" />
                  <h2>{languageTexts.welcomeTitle.button}</h2>
                </a>
              </div>
              <div className="languages-container">
                {languageImgArray.map((e, index) => (
                  <img key={index} src={e} alt="" />
                ))}
              </div>
            </div>
            <div className="about-me-text">
              <div>
                <h3>SOBRE MIM</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis...
                </p>
                <a href="">Saber mais</a>
              </div>
              <div>
                <h3>SOBRE MIM</h3>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis...
                </p>
                <a href="">Saber mais</a>
              </div>
              <div className="container-follow">
                <h3>SIGA-ME</h3>
                <div className="imgs-follow">
                  <img src={gitimg} alt="" />
                  <img src={linkedinimg} alt="" />
                  <img src={instaimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </main>
    </HomePageStyled>
  );
};
