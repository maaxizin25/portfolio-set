import styled from "styled-components";

export const NavBarStyled = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1000;
  // Animations
  @keyframes slideDown {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  //End Animations

  border-bottom: 1px solid var(--color-primary);
  background-color: var(--color-grey-500);
  .container-nav-itens {
    padding: 0px 20px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: none;
    }
    .drop-down {
      display: flex;
    }
    @media (min-width: 667px) {
      .drop-down {
        display: none;
      }
      ul {
        display: flex;
        align-items: center;
      }
      .select-language > img {
        width: 35px;
      }
    }
  }
  .container-open-modal {
    display: flex;
    position: absolute;
    height: 100vh;
    width: 100%;
    animation: slideDown 500ms ease-in-out;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.9);
    ul {
      padding: 20px 0px 0px 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    ul > li {
      font-size: 18px;
    }
    .select-language {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
