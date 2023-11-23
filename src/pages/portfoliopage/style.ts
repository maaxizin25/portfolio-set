import styled from "styled-components";

export const PortfolioPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  h2,
  p {
    color: white;
  }
  .container-portfolio {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .container-projects {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-container {
    padding: 20px;
  }
  .swiper {
    width: 100%;
  }
  .swiper-slide {
    filter: blur(8px);
  }

  .swiper-slide-active {
    filter: blur(0);
  }
`;
