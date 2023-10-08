import styled from "styled-components";

export const UlStyled = styled.ul`
  display: flex;
  gap: 20px;
  li {
    color: var(--font-secundary-color);
    cursor: pointer;
  }
  .select-language {
    display: flex;
    justify-content: center;
  }
  .select-language > img {
    width: 45px;
  }
`;
