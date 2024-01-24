import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { AboutMeComponent } from "../../components/aboutMe";
import { NavBar } from "../../components/navbar";
import { GlobalContainer } from "../../containers";
import { PortfolioPageStyle } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import gitImg from "../../assets/gitimg.png";
import buttonImgView from "../../assets/button-view-img.svg";
import buttonImgVideo from "../../assets/button-video-img.svg";

export const PortfolioPage = () => {
  const { languageTexts } = useContext(AppContext);
  return (
    <div>
      <NavBar />
      <GlobalContainer>
        <PortfolioPageStyle>
          <div className="container-portfolio">
            <h2>Portfolio</h2>
            <div className="container-projects">
              <h2>Meus projetos</h2>
            </div>
          </div>
          <div className="swiper-container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              initialSlide={2}
              autoplay={{
                delay: 2000,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              navigation={true}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                },
                440: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                // Adicione mais breakpoints conforme necessário
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {languageTexts.portfolioItensList.map((e) => {
                return (
                  <SwiperSlide>
                    <div className="card-swiper">
                      <div className="card-swiper-img">
                        <img src={e.image} alt="" />
                      </div>
                      <div className="description-and-buttons">
                        <h2>{e.name}</h2>
                        <p>{e.description}</p>
                        <div>
                          <button>
                            <img src={buttonImgView} alt="" />
                            <h3>{e.buttonView}</h3>
                          </button>
                          <button>
                            <img src={gitImg} alt="" />
                            <h3>{e.buttonGit}</h3>
                          </button>
                          <button>
                            <img src={buttonImgVideo} alt="" />
                            <h3>{e.buttonVideo}</h3>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </PortfolioPageStyle>
      </GlobalContainer>
      <AboutMeComponent />
    </div>
  );
};
