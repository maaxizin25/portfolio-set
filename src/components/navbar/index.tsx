import { GlobalContainer } from "../../containers";
import logo from "../../assets/logo.png";
import { NavBarStyled } from "./style";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <GlobalContainer>
        <div className="container-nav-itens">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>INICIO</li>
            <li>GITHUB</li>
            <li>SOBRE MIM</li>
            <li>PORTFOLIO</li>
            <li>CONTATO</li>
          </ul>
        </div>
      </GlobalContainer>
    </NavBarStyled>
  );
};
