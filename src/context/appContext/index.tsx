import React, { createContext, useState } from "react";
import { iAppContext, iAppContextProps, iLanguage } from "./types";
import { languagePortfolio } from "../../mock/mock-langue";

export const AppContext = createContext({} as iAppContext);

export const AppProvider = ({ children }: iAppContextProps) => {
  const [language, setLanguage] = useState<iLanguage>("portuguese");
  const languageTexts = languagePortfolio[language];

  const changeLanguage = (language: iLanguage) => {
    setLanguage(language);
  };

  return (
    <AppContext.Provider value={{ changeLanguage, languageTexts }}>
      {children}
    </AppContext.Provider>
  );
};
