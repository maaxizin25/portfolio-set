import styled from "styled-components";

export const AboutMeStyledComponent = styled.div`
  background-color: var(--color-grey-500);
  padding: 20px;
  color: white;
  .title {
    display: flex;
    gap: 15px;
    align-items: center;
    .element-start {
      height: 40px;
      width: 3px;
      rotate: calc(20deg);
      transform-origin: bottom center;
      background-color: var(--color-primary);
    }
  }
  .section-one-about {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      color: var(--font-secundary-color);
      font-size: 12px;
    }
    h2 {
      display: flex;
      height: 65px;
      align-items: center;
    }
  }
  .section-two-info {
    padding-bottom: 50px;
    border-bottom: 1px solid var(--color-grey-200);
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 30px;
    .experience {
      display: flex;
      justify-content: space-between;
      max-width: 500px;
      div {
        display: flex;
        align-items: center;
        gap: 5px;
        h2 {
          font-size: 50px;
        }
      }
      p {
        font-size: 10px;
        font-weight: 900;
      }
    }
    .experience-subscription > p {
      color: var(--font-secundary-color);
      font-size: 12px;
    }
    a {
      margin-top: 50px;
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      height: 35px;
      background-color: var(--color-primary);
      width: 147px;
      border-radius: 16px;
      cursor: pointer;
      text-decoration: none;
      color: white;
      font-size: 12px;
    }
  }
  @media (min-width: 665px) {
    .container-component {
      display: flex;
      gap: 50px;
      border-bottom: 1px solid var(--color-grey-200);
    }
    .section-two-info {
      border-bottom: none;
    }
    a {
      margin-top: 10px !important;
    }
  }
`;
