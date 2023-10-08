export interface langPortfolio {
  english: {
    navbar: Array<string>;
  };
  portuguese: {
    navbar: Array<string>;
  };
}

export const languagePortfolio: langPortfolio = {
  english: {
    navbar: ["HOME", "GITHUB", "ABOUT ME", "PORTFOLIO", "CONTACT"],
  },
  portuguese: {
    navbar: ["INÍCIO", "GITHUB", "SOBRE MIM", "PORTFÓLIO", "CONTATO"],
  },
};
