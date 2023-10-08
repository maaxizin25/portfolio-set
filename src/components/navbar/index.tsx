import { GlobalContainer } from "../../containers";
import logo from "../../assets/logo.png";
import dropdown from "../../assets/dropdown-menu.png";
import closedMenu from "../../assets/closed-menu.png";
import { NavBarStyled } from "./style";
import { ListNavBar } from "./list-nav";
import { useState } from "react";

export const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const changeMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <NavBarStyled>
      <GlobalContainer>
        <div className="container-nav-itens">
          <img src={logo} alt="" />
          {dropdownOpen ? (
            <img onClick={changeMenu} src={closedMenu} alt="" />
          ) : (
            <img
              onClick={changeMenu}
              className="drop-down"
              src={dropdown}
              alt=""
            />
          )}
          <ListNavBar />
        </div>
        {dropdownOpen && (
          <div className="container-open-modal">
            <ListNavBar />
          </div>
        )}
      </GlobalContainer>
    </NavBarStyled>
  );
};
