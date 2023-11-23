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

export const PortfolioPage = () => {
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
              slidesPerView={3}
              initialSlide={1}
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
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="card-swiper">
                  <h2>Hamburgueria</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio recusandae laboriosam, earum libero ea aut obcaecati
                    dolores eligendi eveniet, magni doloribus maxime, voluptates
                    nihil sequi nemo quia. Corporis, odio magni!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-swiper">
                  <h2>Hamburgueria</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio recusandae laboriosam, earum libero ea aut obcaecati
                    dolores eligendi eveniet, magni doloribus maxime, voluptates
                    nihil sequi nemo quia. Corporis, odio magni!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-swiper">
                  <h2>Hamburgueria</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio recusandae laboriosam, earum libero ea aut obcaecati
                    dolores eligendi eveniet, magni doloribus maxime, voluptates
                    nihil sequi nemo quia. Corporis, odio magni!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-swiper">
                  <h2>Hamburgueria</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio recusandae laboriosam, earum libero ea aut obcaecati
                    dolores eligendi eveniet, magni doloribus maxime, voluptates
                    nihil sequi nemo quia. Corporis, odio magni!
                  </p>
                </div>
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </PortfolioPageStyle>
      </GlobalContainer>
      <AboutMeComponent />
    </div>
  );
};
