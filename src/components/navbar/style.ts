import styled from "styled-components";

export const NavBarStyled = styled.div`
  .container-nav-itens {
    height: 49px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      gap: 20px;
      li {
        color: var(--font-secundary-color);
        cursor: pointer;
      }
    }
  }
  background-color: var(--color-grey-500);
`;
