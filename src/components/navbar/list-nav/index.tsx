import { useContext } from "react";
import { AppContext } from "../../../context/appContext";
import englishImg from "../../../assets/english.svg";
import portugueseImg from "../../../assets/portuguese.svg";
import { UlStyled } from "./style";

export const ListNavBar = () => {
  const { languageTexts, changeLanguage } = useContext(AppContext);
  return (
    <>
      <UlStyled>
        {languageTexts.navbar.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
        <div className="select-language">
          <img
            onClick={() => changeLanguage("portuguese")}
            src={portugueseImg}
            alt=""
          />
          <img
            onClick={() => changeLanguage("english")}
            src={englishImg}
            alt=""
          />
        </div>
      </UlStyled>
    </>
  );
};
