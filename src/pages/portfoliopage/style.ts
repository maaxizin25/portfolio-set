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
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  .swiper-wrapper {
    width: 100%;
    height: 400px;
  }
  .card-swiper {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: var(--color-grey-500);
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    padding-bottom: 20px;
    max-height: 500px;
    max-width: 400px;
    img {
      width: 100%;
    }
    .description-and-buttons {
      padding: 8px;
      display: flex;
      flex-direction: column;
      p {
        color: var(--font-secundary-color);
      }
      h2 {
        font-size: 20px;
      }
      gap: 10px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 91px;
          height: 32px;
          border-radius: 8px;
          background-color: var(--color-primary);
          color: white;
          font-weight: 900;
          img {
            max-width: 20px;
          }
          h3 {
            font-size: 12px;
          }
        }
      }
    }
  }
  .swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
  .swiper-slide {
    filter: blur(8px);
  }

  .swiper-slide-active {
    filter: blur(0);
  }
`;
