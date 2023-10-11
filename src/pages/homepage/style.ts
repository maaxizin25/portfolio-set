import styled from "styled-components";
import backimg from "../../assets/background-photo.png";

export const HomePageStyled = styled.div`
  @keyframes fadeLeft {
    0% {
      transform: translateX(-1000%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes fadeIn {
    0% {
      transform: translateY(-20%);
    }
  }
  main {
    padding-top: 50px;
    background-image: url(${backimg});
    background-repeat: no-repeat;
    background-position: 100% 8%;
    height: 100vh;
  }

  @media (min-width: 665px) {
    main {
      background-position: 50% 8%;
      background-size: 400px;
    }
  }
  .elements-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .welcome-text {
      display: flex;
      flex-direction: column;
      width: 250px;
      h2,
      h3 {
        color: white;
      }
      p {
        color: var(--font-secundary-color);
      }
      .container-button {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        a {
          display: flex;
          align-items: center;
          padding-left: 10px;
          gap: 8px;
          width: 156px;
          height: 40px;
          background-color: var(--color-primary);
          border-radius: 16px;
          h2 {
            font-size: 13px;
          }
        }
      }
      .languages-container {
        margin-top: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--color-grey-200);
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        animation: fadeLeft 1s;
        img {
          width: 35px;
          height: 35px;
        }
        img:hover {
          animation: fadeIn 1s infinite;
        }
      }
    }
    .about-me-text {
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px 0px;
        border-bottom: 1px solid var(--color-grey-200);
      }

      h3,
      a {
        color: white;
        font-weight: 900;
      }
      a {
        text-decoration: underline;
        cursor: pointer;
      }
      p {
        color: var(--font-secundary-color);
      }
      .container-follow {
        display: flex;
        flex-direction: column;
        border: 0px;
        gap: 0px;
        h3 {
          color: white;
        }
        .imgs-follow {
          display: flex;
          flex-direction: row;
          gap: 10px;
          border: 0;
          img {
            width: 20px;
          }
        }
      }
    }
  }
  @media (min-width: 665px) {
    .elements-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .about-me-text {
        width: 30%;
      }
      .welcome-text {
        width: 380px;
      }
    }
    .languages-container {
      margin-top: 100px !important;
    }
  }
`;
